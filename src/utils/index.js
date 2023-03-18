import { dragon, enToCh, even, large, odd, rankToCharacter, ROLE_TYPE_AGENCY, ROLE_TYPE_ROBOT, ROLE_TYPE_ROOM_ADMIN, ROLE_TYPE_ROOM_MEMBER, ROLE_TYPE_USER, small, tiger, USER_STATUS_APPROVED, USER_STATUS_CRAETED, USER_STATUS_REJECTED, USER_STATUS_SUSPENDED } from "../config";

export const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRole = (role, level) => {
    if(role == ROLE_TYPE_AGENCY) {
        switch (level) {
            case 1:
                return "股东"
            case 2:
                return "大代理"
            case 3:
                return "总代理"
            case 4:
                return "代理"
            default:
                break;
        }
    }else if(role == ROLE_TYPE_USER || role == ROLE_TYPE_ROBOT || role == ROLE_TYPE_ROOM_MEMBER || role == ROLE_TYPE_ROOM_ADMIN) {
        return enToCh[role];
    }
}


export const getCommand = (text) => {
    var command = "";

    for(let i=0 ; i<text.length ; i++) {
        if(isNaN(text[i])) {
            command += text[i];
        }
    }

    return command;
}

export const getAmount = (text) => {
    var amount = "";

    for(let i=text.length - 1 ; i>=0 ; i--) {
        if(!isNaN(text[i])) {
            amount = text[i] + amount;
        }else {
            return Number.parseInt(amount);
        }
    }

    return Number.parseInt(amount);
}

export const getFirstSecondResult = (text) => {
    if(!text) return "";
    const sum = getValue(text[0]) + getValue(text[1]);
    var result = "";

    if(sum > 11) {
        result += sum + large;
    }else {
        result += sum + small;
    }
    
    if(sum % 2 === 0) {
        return result + even;
    }else {
        return result + odd;
    }

}

export const getDragoResult = (text) => {
    if(!text) return "";
    var result = "";

    for(let i=0 ; i<5 ; i++) {
        if(Number.parseInt(text[i]) > Number.parseInt(text[9-i])) {
            result += dragon;
        }else {
            result += tiger;
        }
    }

    return result;
}

export const getValue = (number) => {
    if(number == "0") {
        return 10;
    }else {
        return Number.parseInt(number);
    }
}

export const extractResult = (label, number) => {

    if(!isNaN(label)) {
        return [rankToCharacter[label], number]
    }else if(label === "冠亚和"){
        return [label, number]
    }
    else {
        return [rankToCharacter[number], label]
    }
}

export const loadPridictions = () => {
    const ranks = ["冠军", "亚军", "第三名", "第四名", "第五名", "第六名", "第七名", "第八名", "第九名", "第十名", "冠亚和"];
    return ranks.map(r => getPrediction(r));
}

export const getPrediction = (label) => {
    var results = [];
    var numbers = [1,2,3,4,5,6,7,8,9,0];
    var sums = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    
    let count = 5;
    while (count-- > 0) {
        if(label === "冠亚和"){
            let index = getRndInteger(0, sums.length - 1);
            results.push(sums[index]);
            sums = sums.filter((item, idx) => idx !== index).map(item => item);
        }else {
            let index = getRndInteger(0, numbers.length - 1);
            results.push(numbers[index]);
            numbers = numbers.filter((item, idx) => idx !== index).map(item => item);
        }
        
    }
    return {
        label,
        numbers: results,
        isSmall: getRndInteger(0, 1),
        isOdd: getRndInteger(0, 1)
    }
}

export const getToday = () => {
    const today = new Date();
    return `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`
}

export const getTime = (time) => {
    if(!time) {
        return "";
    }
    const today = new Date(time);
    return `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
}

export const formatTime = time => {
    const today = new Date(time);
    const month = today.getMonth() + 1 
    const date = today.getDate()
    const hours = today.getHours()
    const minutes = today.getMinutes()
    const result = `${today.getFullYear()}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}T${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
    return result;
}

export const getAccountStatus = status => {
    switch (status) {
        case USER_STATUS_APPROVED:
            return "激活"
        case USER_STATUS_CRAETED:
            return "创建"
        case USER_STATUS_REJECTED:
            return "灭活"
        case USER_STATUS_SUSPENDED:
            return "暂停"
    }
}