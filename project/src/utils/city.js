export const handlecitydata = (data) => {
    let date = {
        hot: {
            title: "热门",
            list: []
        }
    };
    for (let index = 0; index < data.length; index++) {
        let {
            py,
            nm,
            id
        } = data[index];
        let title = py.substr(0, 1).toLocaleUpperCase()
        data[index].title = title;
        // console.log(data)
        if (index < 10) {
            date.hot.list.push({
                nm,
                py,
                title
            });
        }

        if (date[title]) {
            //有数据做list.push
            date[title].list.push({
                id,
                nm,
                py
            });
        } else {
            //没有数据做添加
            date[title] = {
                title: title,
                list: [{
                    id,
                    nm,
                    py
                }]
            };
        }
        // console.log(date);


    }

    //排序
    let hot = [date.hot];
    console.log(hot);
    let other = [];
    for (const key in date) {
        if (key !== "hot") {
            other.push(date[key]);
        }
    }
    let sort = other.sort((a, b) => {
        return a.title.charCodeAt() - b.title.charCodeAt();
    });
    console.log(date);
    console.log(sort);
    let reslut = hot.concat(sort);
    return reslut;
}