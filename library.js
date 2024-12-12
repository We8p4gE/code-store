function unix_decode(timestamp, format) {
    const d = new Date(timestamp * 1000),
    h = d.getHours(), m = d.getMinutes(),
    s = d.getSeconds(), D = d.getDate(),
    M = d.getMonth() + 1, Y = d.getFullYear();
    return format ? eval('`' + format + '`')
    : `${h}:${m}:${s}, ${D}/${M}/${Y}`;
}
