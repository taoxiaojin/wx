module.exports = function (grunt) {
  grunt.initConfig({
  concat: {
    options: {
        cwd : "static",
        expand: true
    },
      foo : {
      options: {
          expand: true,
          cwd : "static"
      },
        files : [
            {dest:"static/dist/register.js", src: ["static/jquery.min.js","static/js/mobiscroll_002.js","static/js/mobiscroll.js"]},
            {dest:"static/dist/wenjuan1.js" ,src: ["static/jquery.min.js","static/js/json2.js"]}
        ]
      },
      css: {
          src: ['static/css/mobiscroll.css','static/css/common.css'],
          dest: 'static/dist/all.css'
      }
  },
  uglify: {
     /*build: {
        src: 'dist/built.js',//压缩源文件是之前合并的buildt.js文件
        dest: 'dist/built.min.js'//压缩文件为built.min.js
      }*/
      options: {
          banner: '/*!<%= grunt.template.today("yyyy-mm-dd H:m:s") %> */\n'
      },
      foo : {
          files: [{
              expand:true,
              cwd:'static/dist',//js目录下
              src:'**/*.js',//所有js文件
              dest: 'static/build/',//输出到此目录下
              ext:'.min.js'
          }]
      }
   },
  cssmin: { //css文件压缩
      css: {
          src: 'static/dist/all.css',//将之前的all.css
          dest: 'static/build/all.min.css'  //压缩
      }
  }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-css');

  grunt.registerTask('default', ['concat','uglify','cssmin']);
}
