// start coding your function here!

function running_late(date)
{
    let dateArr = date.split(' ')
    let hour = dateArr[3].slice(0, 2)
    if (hour >= 22)
    {
        return "It is late!";
    }
    else
    {
        return "It is still early!";
    }
}

exports.running_late = running_late;
