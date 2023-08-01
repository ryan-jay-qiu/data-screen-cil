import path from 'path'
import fs from 'fs'
import url from 'url'
import prompts from 'prompts'
import spawn from 'cross-spawn'
import chalk from 'chalk'
import minimist from 'minimist'
// import downloadGitRepo from 'download-git-repo'
import ora from 'ora'
import { pkgFromUserAgent, isValidPackageName, emptyDir, copy, updatePackage } from './utils.mjs'
const defaultProjectName = 'data-screen'
const spinner = ora('模板正在拉取，请骚等...')

const projectInit = async () => {
  let projectDir = defaultProjectName
  // 用户交互列表
  const answer = await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: '请输入您的项目名称：',
      initial: defaultProjectName,
      onState: (state) => {
        state.value = state.value.trim().replace(/\/+$/g, '')
        // console.log('>>>1', state)
      },
      validate: (name) => {
        if (isValidPackageName(name)) {
          return true
        }
        return '格式错误，请重新输入'
      }
    },
    {
      type: (pre) => (fs.existsSync(pre) ? 'confirm' : null),
      name: 'override',
      initial: 1,
      message: (pre) => `项目名称目录${pre}已存在，是否覆盖？`,
    },
    {
      type: (override) => {
        if (override === false) {
          throw new Error(chalk.red('✖ 操作已取消'))
        }
        return null
      },
      name: 'overrideChecker'
    },
    {
      type: 'text',
      name: 'description',
      message: '请输入您的项目描述：',
      initial: `快速生成项目脚手架..`
    },
    {
      type: 'select',
      name: 'framework',
      message: '选择框架？',
      choices: () => [
        { title: 'Vue(推荐)', value: 'vue' },
        { title: 'React(暂不支持)', value: 'react' }
      ],
      initial: 0
    },
    {
      type: 'select',
      name: 'language',
      message: '选择开发语言？',
      choices: (pre) => {
        const langList = [
          { title: 'JavaScript', value: 'js' },
          { title: 'TypeScript', value: 'ts' }
        ]
        if (pre === 'vue') {
          langList.push({ title: 'using create-vue ↗', value: 'custom' })
        }
        return langList
      },
      initial: 0
    }
  ], {
    onCancel: () => {
      throw new Error(chalk.red('✖ 操作已取消'))
    }
  })
  // console.log(answer)

  const { projectName, override, framework, language } = answer

  projectDir = projectName

  const userAgent = process.env.npm_config_user_agent ?? ''
  const packageManager = /pnpm/.test(userAgent) ? 'pnpm' : /yarn/.test(userAgent) ? 'yarn' : 'npm'

  if (language === 'custom') {
    const customCommand = 'npm create vue@latest TARGET_DIR'
    const fullCustomCommand = customCommand.replace('TARGET_DIR', projectDir)
    // console.log(fullCustomCommand)
    const [command, ...args] = fullCustomCommand.split(' ')
    console.log('>>>>', command, args)
    const { status } = spawn.sync(command, args, {
      stdio: 'inherit'
    })
    process.exit(status ?? 0)
  }

  if (framework === 'react') {
    const customCommand = `npx create-react-app TARGET_DIR ${language === 'ts' ? '--template typescript' : ''}`
    const fullCustomCommand = customCommand.replace('TARGET_DIR', projectDir)
    const [command, ...args] = fullCustomCommand.split(' ')
    const { status } = spawn.sync(command, args, {
      stdio: 'inherit'
    })
    process.exit(status ?? 0)
  }

  // 判断目标目录是否存在
  const targetDir = path.join(process.cwd(), projectDir)
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  } else if (override) {
    console.log('覆盖文件')
    emptyDir(targetDir)
  }
  console.log(chalk.cyan('\n项目生成路径：'), targetDir, '\n')

  // 加载本地绝对文件路径
  const templateName = `template-${framework}-${language}`
  const templateRoot = path.resolve(__dirname, '../../', './template', templateName)
  // console.log('templateRoot>>>', templateRoot)


  spinner.start()
    // const srcMap = {
    //   'vue': 'direct:https://github.com/532pyh/mortal/archive/refs/heads/master.zip',
    // }
    // const srcPath = srcMap[framework]
    // console.log(srcPath, targetDir)
    // await new Promise((resolve, reject) => {
    //   downloadGitRepo(srcPath, targetDir, (err) => {
    //     if (err) {
    //       reject(err)
    //       console.log(chalk.red(err))
    //       process.exit()
    //     }
    //     resolve()
    //   })
    // })
    copy(templateRoot, targetDir)
  // 更新package信息
  updatePackage(targetDir, answer, () => {
    printMessage()
    spinner.stop()
  })

  function printMessage () {
    console.log(chalk.green('\n\n项目创建成功!!!\n'))
    console.log(chalk.redBright(`  cd ${projectName}`))
    console.log(chalk.redBright(`  npm install`))
    console.log(chalk.redBright(`  npm run dev`))
  }

}

projectInit().catch(err => {
  console.error("Error Info >>>>>", err.message)
  spinner.stop()
})