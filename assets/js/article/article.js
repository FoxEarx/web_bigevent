$(function () {
  const form = layui.form
  const initArtCateList = function () {
    $.ajax({
      type: 'GET',
      url: '/my/article/cates',
      success: (res) => {
        if (res.status !== 0) return layer.msg('请求文章列表失败')
        layer.msg('请求文章列表成功')
        const htmlStr = template('tpl-table', res)
        $('tbody').empty().html(htmlStr)
      },
    })
  }
  let indexAdd = null
  $('#btnAddCate').click(function () {
    indexAdd = layer.open({
      type: 1,
      area: ['500px', '250px'],
      title: '添加文章分类',
      content: $('#dialog-add').html(),
    })
  })
  $('body').on('submit', '#form-add', function (e) {
    e.preventDefault()
    $.ajax({
      type: 'POSt',
      url: '/my/article/addcates',
      data: $(this).serialize(),
      success: (res) => {
        if (res.status !== 0) return layer.msg('添加图书失败')
        layer.msg('添加图书失败')
        layer.close(indexAdd)
        initArtCateList()
      },
    })
  })
  let indexEdit = null
  $('tbody').on('click', '.btn-edit', function () {
    const id = $(this).attr('data-id')
    $.ajax({
      type: 'GET',
      url: '/my/article/cates/' + id,
      success: (res) => {
        if (res.status !== 0) return layer.msg('获取当前文章信息失败')
        form.val('form-edit', res.data)
      },
    })
    indexEdit = layer.open({
      type: 1,
      area: ['500px', '250px'],
      title: '修改文章分类',
      content: $('#dialog-edit').html(),
    })
  })
  $('body').on('submit', '#form-edit', function (e) {
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: '/my/article/updatecate',
      data: $(this).serialize(),
      success: (res) => {
        if (res.status !== 0) return layer.msg('更新数据失败')
        initArtCateList()
        layer.close(indexEdit)
      },
    })
  })
  $('tbody').on('click', '.btn-delet', function () {
    const id = $(this).attr('data-id')
    layer.confirm('确定删除吗？', { icon: 3, title: '提示' }, function (index) {
      $.ajax({
        type: 'GET',
        url: '/my/article/deletecate/' + id,
        success: (res) => {
          if (res.status !== 0) return layer.msg('删除文章失败')
          layer.msg('删除文章成功')
          initArtCateList()
          layer.close(indexEdit)
        },
      })
    })
  })
  initArtCateList()
})
