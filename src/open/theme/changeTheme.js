// 切换主题

export default function ChangeTheme(type){

      document.getElementById("theme").href = `./css/theme_${type}.css`;
}