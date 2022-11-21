// 复制到剪贴板
export default function Copy(text){
    const dummy = document.createElement('textarea')
    dummy.style.position = 'absolute'
    dummy.style.left = '-9999px'
    dummy.style.top = '-9999px'
    document.body.appendChild(dummy)
    dummy.value = text
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
}