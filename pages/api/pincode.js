// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pincodes from '../../pincodes.json'
export default function handler(req, res) {
  try {
    // let pincodes = 
    res.status(200).json(pincodes)
  } catch (error) {
    res.status(400).json({ error: error })

  }
}
