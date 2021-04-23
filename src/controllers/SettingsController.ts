import { Request, Response  } from 'express'
import models from '../../models'
const Settings = models.Settings

class SettingsController {
     async create(resquest: Request, response: Response) {

         Settings.create({
             username: "tonnytg@gmail.com",
             chat: true
         })
             .then((newSetting) => {
                 // The get() function allows you to recover only the DataValues of the object
                 console.log(newSetting.get())
                 response.json({
                     status: 200,
                     data: newSetting
                 })
             })
             .catch((err) => {
                 console.log("Error while setting creation : ", err)
             })
     }
}

export  { SettingsController }