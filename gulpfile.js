const gulp = require('gulp')
const ts = require('gulp-typescript')
const nodemon = require('gulp-nodemon')
const JSON_FILES = ['src/*.json', 'src/**/*.json']
const typedoc = require('gulp-typedoc')

/**
 * Configuração do Typescript
 */
const tsProject = ts.createProject('tsconfig.json')

/**
 * Compilação Typescript
 */
gulp.task('compile', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject())
  return tsResult.js.pipe(gulp.dest('dist/src'))
})

/**
 * Tarefa pra monitorar diretórios do projeto
 */
gulp.task('watch', ['compile'], () => {
  gulp.watch('src/**/*.ts', ['compile'])

  nodemon({
    script: './dist/src/server.js'
  })
})

/**
 * Tarefa que transfere arquivos json do projeto para dir de distribuição
 */
gulp.task('assets', function () {
  return gulp.src(JSON_FILES)
    .pipe(gulp.dest('dist'))
})

/**
 * Tarefa que gera documentação do projeto
 */
gulp.task('typedoc', function () {
  return gulp
    .src(['src/**/*.ts'])
    .pipe(typedoc({
      module: 'commonjs',
      target: 'es6',
      out: 'documentacao/',
      name: 'Loja API',
      ignoreCompilerErrors: true

    }))
})

/**
 * Tarefa que altera a variável de ambiente NODE_ENV para development
 */
gulp.task('set-development-node-env', function () {
  process.env.NODE_ENV = 'development'
})

/**
 * Agrupa as tarefas default
 */
gulp.task('default', ['set-development-node-env', 'typedoc', 'watch', 'assets'])
