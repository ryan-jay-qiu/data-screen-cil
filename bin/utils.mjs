import fs from 'fs'
import path from 'path'

// 用户使用的包管理工具判断
export const pkgFromUserAgent = (userAgent) => {
  if (!userAgent) return undefined
  const pkgSpec = userAgent.split(' ')[0]
  const pkgSpecArr = pkgSpec.split('/')
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1]
  }
}

// 判断项目名称是否正确
export const isValidPackageName = (projectName) => {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(projectName)
}

// 判断目录为空
export const isEmpty = (path) => {
  const files = fs.readdirSync(path)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}

// 清空目录文件
export const emptyDir = (dir) => {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    // console.log('删除的文件>>>', path.resolve(dir, file))
    fs.rmSync(path.resolve(dir, file), { force: true, recursive: true })
  })
} 

// 拷贝文件
export const copy = (srcDir, targetDir) => {
  const files = fs.readdirSync(srcDir)
  // console.log(files)
  files.forEach(file => {
    const _path = path.resolve(srcDir, file)
    const _target = path.resolve(targetDir, file)
    if (fs.statSync(_path).isDirectory()) {
      // console.log(file, '-> 文件夹')
      fs.mkdirSync(_target, { recursive: true })
      copy(_path, _target)
    } else {
      // console.log(file, '-> 文件')
      fs.copyFileSync(_path, _target)
    }
  })
}

// 更新包信息
export const updatePackage = (targetDir, answer, callback) => {
  const { projectName, description, author } = answer
  const data = fs.readFileSync(path.resolve(targetDir, 'package.json'), 'utf8')

  const packageJson = JSON.parse(data)
  packageJson.name = projectName
  packageJson.description = description
  packageJson.author = author || 'liben'

  fs.writeFileSync(path.resolve(targetDir, 'package.json'), JSON.stringify(packageJson, null, 2), 'utf8')

  callback && callback()
}