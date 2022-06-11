$(function () {
  const form = layui.form
  form.verify({
    nickname: (value) => {
      if (value.length > 6) return '字符长度不能超过6个'
    },
  })
  const initUserInfo = function () {
    $.ajax({
      type: 'GET',
      url: '/my/userinfo',
      success: (res) => {
        if (res.status !== 0) return layer.msg('获取用户信息失败')
        layer.msg('获取用户信息成功')
        form.val('formUserInfo', res.data)
      },
    })
  }
  $('#btnReset').on('click', function (e) {
    e.preventDefault()
    initUserInfo()
  })
  $('.layui-form').submit(function (e) {
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: '/my/userinfo',
      data: $(this).serialize(),
      success: (res) => {
        console.log(res)
        if (res.status !== 0) return layer.msg('提交信息失败')
        layer.msg('提交信息成功')
        window.parent.getUserInfo()
      },
    })
  })
  initUserInfo()
})
