function unix_decode(timestamp, format) {
    const date = new Date(timestamp * 1000);
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const D = date.getDate();
    const M = date.getMonth() + 1;
    const Y = date.getFullYear();
    if (format) {
        return eval('`' + format + '`')
    } else {
        return `${h}:${m}, ${D}/${M}/${Y}`
    }
}