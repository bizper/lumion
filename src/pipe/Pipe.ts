import { resolve } from 'path'

const launch = () => {
    const src = resolve(__dirname, process.env.TARGET_FOLDER)
    console.log(src);


}

export default launch