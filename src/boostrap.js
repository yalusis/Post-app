import * as Font from 'expo-font'
import { DB } from './db'

export async function boostrap() {
   try {
      await Font.loadAsync({
         'bold-open': require('../assets/fonts/OpenSans-Bold.ttf'),
         'regular-open': require('../assets/fonts/OpenSans-Regular.ttf')
        })
      await DB.init()
      console.log('Database started...')
   } catch (e) {
     console.log(e)
   }
}