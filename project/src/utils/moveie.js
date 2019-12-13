// 对图片进行操作
export const getmoveieimg = (data) => {
    // console.log(data);
    for (let index = 0; index < data.length; index++) {
        let {
            img
        } = data[index];
        let img2 = img.split("/")[2];
        let img4 = img.split("/")[4];
        let img5 = img.split("/")[5];
        let image = `https://${img2}/${img4}/${img5}`;
        // console.log(image);
        data[index].img = image;
        // console.log(data[index].img);
    }
    return data;
}

// 用来获取更多的数据
export const getmore = (moveId) => {
    // console.log(moveId);
    let more = [];
    for (let index = 0; index < 10; index++) {
        let item = moveId[Math.floor(Math.random() * moveId.length)];
        more.push(item)
    }
    return more;
}