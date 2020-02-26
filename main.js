mybutton.addEventListener('click', (e) => {
    let request = new XMLHttpRequest
    request.open('GET', '/xxx') //配置request
    request.send()
    request.onreadystatechange = () => {
        if (request.readyState === 4)
            console.log('请求响应都完毕了')
        console.log(request.status)
        if (request.readyState >= 200 && request.readyState < 300) {
            console.log('说明请求成功')
            console.log(typeof request.responseText)
            console.log(request.responseText)
            let string = request.responseText
            //把符合JSON语法的字符串
            //转换成JS对应的值
            let object = JSON.parse(string)
            //JSON.pase 是浏览器提供的
            console.log(typeof object)
            console.log(object)
            console.log('object.note')
            console.log(object.note)
        } else if (request.readyState >= 400) {
            console.log('说明请求失败')
        }
    }
})