export const cc_format = value => {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (let i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}

export const checkDigit = event => {
    var code = (event.which) ? event.which : event.keyCode;

    if ((code < 48 || code > 57) && (code > 31)) {
        return false;
    }

    return true;
}

export const handleChange = (e, state, setState) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    setState({...state, [name]: value });
}