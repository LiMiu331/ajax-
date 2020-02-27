mybutton.addEventListener('click', (e) => {
    let request = new XMLHttpRequest
    request.open('post', '/xxx') //配置request
    request.setRequestHeader('bibi','18')
    request.send('我偏要设置request body')
    request.onreadystatechange = () => {
        if (request.readyState === 4)
            console.log('请求响应都完毕了')
            console.log(request.status)
            console.log(request.statusText)  //ok
            if (request.status >= 200 && request.status < 300) {
                console.log('说明请求成功')
                console.log(request.getAllResponseHeaders(''))
                console.log(request.getResponseHeader('Content-Type'))
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