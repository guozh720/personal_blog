
export const asyncUtil = (data: any, time: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() < 0.85) {
                console.log('resolve')
                resolve(data);
            } else {
                console.log('reject')
                reject(data)
            }
        }, time)

    })
}