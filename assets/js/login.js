$(function () {
  $('#link_reg').on('click', () => {
    $('.login-box').hide()
    $('.reg-box').show()
  })
  $('#link_login').on('click', () => {
    $('.login-box').show()
    $('.reg-box').hide()
  })
  const form = layui.form
  form.verify({
    pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    repwd: (val) => {
      // 通过形参拿到的是确认密码框中的内容
      // 还需要拿到密码框中的内容
      // 然后进行一次等于的判断
      // 如果判断失败,则return一个提示消息即可
      const pwd = $('.reg-box [name=password]').val()
      if (pwd !== val) return '两次密码不一致'
    },
  })
  //   const baseUrl = 'http://www.liulongbin.top:3007'
  $('#form_reg').submit(function (e) {
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: '/api/reguser',
      data: {
        username: $('#form_reg [name=username]').val(),
        password: $('#form_reg [name=password]').val(),
      },
      success: (res) => {
        console.log(res)
        if (res.status !== 0) return layer.msg(res.message)
        layer.msg('注册成功')
        $('#link_login').click()
      },
    })
  })
  $('#form_login').submit(function (e) {
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: '/api/login',
      data: $(this).serialize(),
      success: (res) => {
        console.log(res)
        if (res.status !== 0) return layer.msg(res.message)
        layer.msg('登陆成功')
        localStorage.setItem('token', res.token)
        location.href = '/index.html'
      },
    })
  })
})
