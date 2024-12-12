function unix_decode(timestamp, format) {
    const d = new Date(timestamp * 1000);
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const D = d.getDate();
    const M = d.getMonth() + 1;
    const Y = d.getFullYear();
    if (format) {
        return eval('`' + format + '`')
    } else {
        return `${h}:${m}, ${D}/${M}/${Y}`
    }
}
