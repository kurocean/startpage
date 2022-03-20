let searchPrefix                                           //搜索前缀
let searchContent
let searchSuffix=""   //谷歌搜索后缀，百度搜索没有后缀
let searchString
let query = location.search;
let searchEngine = "baidu";               //使用的搜索引擎，默认为百度
let date = new Date();
let y,mo,d,h,mi,s
let weekday;
let greeting;

function onLoad()
{
    if(query) 
    {
        searchEngine = query.substr(1);      //去掉?号
    }
    everysecond();
    setInterval(everysecond,1000);
    header();
    icon();
    document.getElementById("searchiconline").style.visibility="visible";
    document.getElementById('input').focus();
}

function search()
{
    searchContent=document.getElementById("input").value;
    if(searchEngine==="baidu")
    {
        searchPrefix="https://www.baidu.com/s?wd=";//百度搜索前缀
    }
    else if(searchEngine==="google")
    {
        searchPrefix="https://www.google.com/search?q=";//谷歌搜索前缀
        searchSuffix="&safe=off"

    }
    else if(searchEngine==="bing")
    {
        searchPrefix="https://www.bing.com/search?q=";
        searchSuffix="&FORM=BESBTB&ensearch=1";
    }
    searchString=searchPrefix+searchContent+searchSuffix;
    window.open(searchString);
}
function iconMethod()
{
    var obj=event.srcElement;  //event在ie中自带有，可以不用传入，其他少数浏览器需要传入
    if((obj.title)==="谷歌")
    {
        searchEngine="google";
    }
    else if((obj.title)==="百度")
    {
        searchEngine="baidu";
    }
    else if((obj.title)==="必应")
    {
        searchEngine="bing";
    }
    search();
    icon();
}

function header() 
{
    h = date.getHours();
    greeting = document.getElementById('greeting');
    if(h>=0&&h<12){
        greeting.innerHTML="早上好";
    }else if(h>=12&&h<13){
        greeting.innerHTML="中午好";
    }else if(h>=13&&h<=18){
        greeting.innerHTML="下午好";
    }else if(h>=19&&h<24){
        greeting.innerHTML="晚上好";
    }
    weekdayArray = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
    document.getElementById('weekday').innerHTML = weekdayArray[date.getDay()];
}
function everysecond()
{
    date = new Date();
    y = date.getFullYear();
    mo = date.getMonth()+1;
    d = date.getDate();
    h = date.getHours();
    mi = date.getMinutes();
    s = date.getSeconds();

    document.getElementById("year").innerHTML=y;
    document.getElementById('month').innerHTML =mo;
    document.getElementById('day').innerHTML =d;
    document.getElementById('hour').innerHTML =h;
    document.getElementById('minute').innerHTML =mi;
    document.getElementById('second').innerHTML =s;
}
function icon()
{
    if(searchEngine==="baidu")
    {
        document.getElementById('icon1').src ="./img/google.png";
        document.getElementById('icon1').title ="谷歌";
        document.getElementById('icon2').src ="./img/baidu.png";
        document.getElementById('icon2').title ="百度";
        document.getElementById('icon3').src ="./img/bing.png";
        document.getElementById('icon3').title ="必应";
    }
    else if(searchEngine==="google")
    {
        document.getElementById('icon2').src ="./img/google.png";
        document.getElementById('icon2').title ="谷歌";
        document.getElementById('icon1').src ="./img/baidu.png";
        document.getElementById('icon1').title ="百度";
        document.getElementById('icon3').src ="./img/bing.png";
        document.getElementById('icon3').title ="必应";
    }
    else if(searchEngine==="bing")
    {
        document.getElementById('icon1').src ="./img/google.png";
        document.getElementById('icon1').title ="谷歌";
        document.getElementById('icon3').src ="./img/baidu.png";
        document.getElementById('icon3').title ="百度";
        document.getElementById('icon2').src ="./img/bing.png";
        document.getElementById('icon2').title ="必应";
    }
}

