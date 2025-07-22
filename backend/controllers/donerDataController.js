import donerDataModel from '../models/donerDataModel.js'

const postDonerData = async (req, res) => {
  try {
    const {fullname, bloodgroup, address, location, gender, phoneno} = req.body;

    const singleDonerData = {
      fullname,
      bloodgroup,
      address,
      location,
      gender,
      phoneno
    }

    console.log(singleDonerData);

    const donerData = new donerDataModel(singleDonerData)
    await donerData.save()

    res.json({success: true, message: "data was saved"}); 
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Invalid data"}); 
  }
}

const getDonerData = async (req, res) => {
  try {
    const donerData = await donerDataModel.find({});
    res.send(donerData);

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to fetch data" });
  }
}

export { postDonerData, getDonerData };