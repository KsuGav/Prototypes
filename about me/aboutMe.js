/**
 * Created by Ksu on 03.07.2016.
 */
function Baby(){
    this.period = 'Infancy';
    this.name = 'Kseniya Gaidamanchuk';
    this.date_of_birth = '06.12.1991';
    this.city = 'Torez';
    this.toYears = 6;
}
var baby_Ksu = new Baby();

function School(){
    this.period = 'School years';
    this.hobbies = ['dansing','painting','riding'];
    this.progress = 'silver medal';
    this.fromYears = 7;
    this.toYears = 16;
}
School.prototype = baby_Ksu;
var school_Ksu = new School();

function University(){
    this.period = 'Yong adults';
    this.city = 'Kharkiv';
    this.education = 'Kharkiv National University of Economics';
    this.profession = 'Logistic';
    this.newhobbies = ['snowboarding','salsa','traveling','cooking'];
    this.travel = ['Montenegro','Vien','Prague','Cyprus','Budapest','Saint-Petersburg','Moscow'];
    this.fromYears = 17;
    this.toYears = 22;
}
University.prototype = school_Ksu;
var university_Ksu = new University();

function NowTime(){
    this.period = 'Nowadays';
    this.firstJob='Manager of logistic';
    this.city = 'Lviv';
    this.profession = 'Junior Front End Developer';
    this.education = "IT School LOGOS";
    this.newtravel = ['Amsterdam','Berlin','Rome'];
    this.fromYears = 23;
}
NowTime.prototype = university_Ksu;
var nowTime_Ksu = new NowTime();

$('button').on('click',function(){
    var years = parseInt($('input').val());
    var baby = "My name is "+baby_Ksu.name+". I was burn on "+baby_Ksu.date_of_birth+
        " in "+baby_Ksu.city+'. ';
    var school = 'At school I liked '+school_Ksu.hobbies+'. I finished school with a '
        +school_Ksu.progress+'. ';
    var university = 'After school I moved to '+university_Ksu.city+', and was admitted ' +
        'to the ' +university_Ksu.education+' on a specialty '+university_Ksu.profession+
        '. While studying at the university I had a new hobbies: '+university_Ksu.newhobbies+
        '. I began to travel and visited '+university_Ksu.travel+'. ';
    var nowTime = 'After university I worked as a '+nowTime_Ksu.firstJob+
        ' in online-company in Kharkov. A year later, I met my future husband and moved to the '+
        nowTime_Ksu.city+'. Now I retrained for '+nowTime_Ksu.profession+
        ' at '+nowTime_Ksu.education+'. During this time, I do not forget about my favorite hobby and discovered '+
        nowTime_Ksu.newtravel+'.';
    if(years>0&&years<=6){
        console.log(baby_Ksu);
        $('#picture').css({'backgroundImage': 'url(baby.png)',
            'background-size': 'cover'});
        $("#info").text(baby);
        $('#period').text(baby_Ksu.period);
    } else if(years>6&&years<=16){
        console.log(school_Ksu);
        $('#picture').css({'backgroundImage': 'url(school.png)',
            'background-size': 'cover'});
        $("#info").text(baby+school);
        $('#period').text(school_Ksu.period);
    }else if(years>16&&years<=22){
        console.log(university_Ksu);
        $('#picture').css({'backgroundImage': 'url(university.jpg)',
            'background-size': 'cover'});
        $("#info").text(baby+school+university);
        $('#period').text(university_Ksu.period);
    }else if(years==23||years==24){
        console.log(nowTime_Ksu);
        $('#picture').css({'backgroundImage': 'url(nowdays.jpg)',
            'background-size': 'cover'});
        $("#info").text(baby+school+university+nowTime);
        $('#period').text(nowTime_Ksu.period);
    }else{alert("It's not correct!")}
})