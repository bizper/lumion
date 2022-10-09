import { resolve } from 'path'

const launch = () => {

    const base: string = resolve('./', process.env.TARGET_FOLDER)
    console.log(base)

    const config = require('../../target/lumion.json')
    console.log(config);

}

export default launch