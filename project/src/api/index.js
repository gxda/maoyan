import axios from "../utils/axios"

// 获取正在上映的数据
export const getshowing = () => {
    return new Promise((resolve, reject) => {
        let url =
            "./hehe/ajax/movieOnInfoList?token=&optimus_uuid=2E8E49F01AF811EAA1EC2FBB1F2A6AE27DFCD038FB964E4B95F23B9CD68EEE45&optimus_risk_level=71&optimus_code=10";
        axios.get(url).then(data => {
            resolve(data);
        }).catch((err) => {
            reject(err)
        });
    })
}

// 获取城市的数据
export const getcity = () => {
    return new Promise((resolve, reject) => {
        let url =
            "./hehe/dianying/cities.json";
        axios.get(url).then(data => {
            resolve(data);
        }).catch((err) => {
            reject(err)
        });
    })

}

// 获取即将上映的数据
export const getcomming = () => {
    return new Promise((resolve, reject) => {
        let url =
            "./hehe/ajax/mostExpected?ci=59&limit=10&offset=0&token=&optimus_uuid=2E8E49F01AF811EAA1EC2FBB1F2A6AE27DFCD038FB964E4B95F23B9CD68EEE45&optimus_risk_level=71&optimus_code=10";
        axios.get(url).then(data => {
            resolve(data);
        }).catch((err) => {
            reject(err)
        });
    })

}

// 获取即将上映的数据
export const getcomme = () => {
    return new Promise((resolve, reject) => {
        let url =
            "./hehe/ajax/comingList?ci=59&token=&limit=10&optimus_uuid=2E8E49F01AF811EAA1EC2FBB1F2A6AE27DFCD038FB964E4B95F23B9CD68EEE45&optimus_risk_level=71&optimus_code=10";
        axios.get(url).then(data => {
            resolve(data);
        }).catch((err) => {
            reject(err)
        });
    })

}





// 获取即将上映的数据
export const getmovedetail = (id) => {
    return new Promise((resolve, reject) => {
        let url =
            `/hehe/ajax/detailmovie?movieId=${id}&optimus_uuid=81AFE4901C2411EABD7EA7A2E4FF6A1372C6F9EDD838417FA61E43028431D103&optimus_risk_level=71&optimus_code=10`;
        axios.get(url).then(data => {
            resolve(data);
        }).catch((err) => {
            reject(err)
        });
    })

}


// 获取电影院数据
export const getcinemadata = () => {

    return new Promise((resolve, reject) => {
        let url = "/hehe/ajax/cinemaList?day=2019-12-13&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1576222269226&cityId=1&optimus_uuid=077C01401CBF11EAA338338C88948AD4277FCDE616924099BA3521377681244F&optimus_risk_level=71&optimus_code=10";
        axios.get(url).then(data => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })

    })
}



// 根据id获取数据
export const getmoredata = (movieId) => {
    return new Promise((resolve, reject) => {
        // console.log(movieId) 

        let url =
            `/hehe/ajax/moreComingList?token=&movieIds=${movieId[0]}%2C${movieId[1]}%2C${movieId[2]}%2C${movieId[3]}%2C${movieId[4]}%2C${movieId[5]}%2C${movieId[6]}%2C${movieId[7]}%2C${movieId[8]}%2C${movieId[9]}&optimus_uuid=2E8E49F01AF811EAA1EC2FBB1F2A6AE27DFCD038FB964E4B95F23B9CD68EEE45&optimus_risk_level=71&optimus_code=10`;
        // console.log(url)
        axios.get(url).then(data => {
            resolve(data);
        }).catch((err) => {
            reject(err)
        });
    })

}