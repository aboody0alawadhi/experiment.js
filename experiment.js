//___________---__________---________________---__________---________________---__________---_____
//للتحذير 
// alert("hi there");

//___________---__________---________________---__________---________________---__________---_____
// للعرض في وضع المطورين

//console.log("hi there");
//___________---__________---________________---__________---________________---__________---_____
/*
انواع المتغيرات
-let
-+var
-onts
*/
//استخدام المتغير
//var name ="aoodivo";
//name ="aoodivo Js";
//console.log(name);
//document.write(name);
//___________---__________---________________---__________---________________---__________---_____
//المتغيرات المسموحة
//var Name;
//var name;
//var _name;
//var $name;
//var name1;

//var age=19;
//var Age=18;
//console.log("age= "+ age);
//console.log("Age= "+ Age);
//console.log(typeof age);

// اسماء variable الذي يمكنك استخدامها
// var i ;
// var Name;
// var name;
// var _name;
// var $name;
// var TheNumberisVeryBig;
// var My_name_is;

// // امثلة من اسماء غير ممكنة
// var 12yaer;     // _ لانه بدات بالرقم بدل الحرف او 
// var My-Name;    // لانه اسم يحتوي على اشكال خاصة فهذا شي غير مسموح
// var My&name;    // لانه اسم يحتوي على اشكال خاصة فهذا شي غير مسموح
// var break;      // لانه يحتوي على كلمات محجوزة في جافا سكريبت
// var false;      // ايضا لانه يحتوي على كلمات محجوزة في جافا سكريبت
//___________---__________---________________---__________---________________---__________---_____
//طرق الجمع
//var number = 4;
// console.log(++number);
// Operator 	Description                      الوصف
// +	        Addition                        الجمع
// -	        Subtraction                     الطرح
// *	        Multiplication                  الضرب
// **	        Exponentiation      مضاعفة قوة العدد
// /	        Division                      القسمة
// %	        Modulus                للعرض الباقي
// ++	        Increment           للزيادة 1 للعدد
// --	        Decrement          للنقص 1 من العدد

// var firstName = "abdulrahman";
// var lastName  = " Alawadhi";
// firstName += lastName;

//var number1 = 10;
//var number2 = 20;

//number2/=number1;


//console.log(number2);

// Operator	    Example مثال   Same As مشابه
// =	         x = y	        x = y
// +=	        x += y      	x = x + y
// -=	        x -= y	        x = x - y
// *=	        x *= y      	x = x * y
// /=	        x /= y	        x = x / y
// %=	        x %= y	        x = x % y
// **=	        x **= y	        x = x ** y
//___________---__________---________________---__________---________________---__________---_____

// document.getElementById("");            ID  لتحديد عناصر اتش تي ام ال عبر اسم
// -----------------------------------------------------------------------------------
// innerHTML  
//                                  يتم استخدامها لتعديل على القيمة عنصر المحدد
//                                   او  يمكنك استخدامها لعرض للمحتوى العنصر المحدد 
// -----------------------------------------------------------------------------------
// innerText 
//                             text يتم استخدامها لعرض العنصر المحدد على شكل نص
//                                  text او  تحديد قيمة جديدة للعنصر المحدد بصيغة نص
// ------------------------------------------------------------------------------------
//var content = document.getElementById("content");
//content.innerHTML = "<p> aboodivo </p>";

// document.getElementById("content").innerText = "<h1> aboodivo JavaScript </h1>";

//alert(content.innerText);
//___________---__________---________________---__________---_____
// outerHTML يتم استخدامها لإستبدال عنصر المحدد مع القيمة الذي يتواجد ضمنها بقيمة جديدة
//             او يمكنك  استخدامها للحصول على العنصر المحدد مع القيمة الذي يتوجد ضمنها
// -----------------------------------------------------------------------------------------
// outerText    يتم استخدامها لإستبدال عنصر المحدد مع القيمة الذي يتواجد ضمنها بنص جديد
//                    او يمكنك  استخدامها للحصول على العنصر المحدد مع القيمة الذي يتوجد 
//                                                                           ضمنها بصيغة نص
// -----------------------------------------------------------------------------------------
// innerHTML  
//                                  يتم استخدامها لتعديل على القيمة العنصر المحدد
//                                   او  يمكنك استخدامها لعرض للمحتوى العنصر المحدد 
// -----------------------------------------------------------------------------------
// innerText 
//                             text يتم استخدامها لعرض العنصر المحدد على شكل نص
//                             text او  لتحديد قيمة جديدة للعنصر المحدد بصيغة نص
// ------------------------------------------------------------------------------------


//let header = document.getElementById("header");
//header.outerHTML = "<h2> انا احب جافاسكربت </h2>";
// alert(header.innerText);
//___________---__________---________________---__________---________________---__________---_____

// JavaScript OutPut            -          بعض طرق عرض بيانات بجافا سكربت
// -------------------------------------------------------------------------
// window.alert();                            لعرض بيانات عبر إشعار منبثق
// console.log();                لعرض البيانات في الوضع المتطورين كونسول
// document.write();                       لعرض البيانات عبر اتش تي ام ال
// innerHTML                           لعرض بيانات عبر عناصر اتش تي ام ال     
// innerText            لعرض البيانات عبر عناصر اتش تي ام ال على صيغة نص 
// -------------------------------------------------------------------------

//console.log("aboodivo");

//document.write("<h1>aboodivo JavaScript</h1>");

//var text = "<H1> تجربة عرض بيانات </H1>";
//document.getElementById("text").innerHTML =text;
//___________---__________---________________---__________---________________---__________---_____
// toUpperCase()  لتحويل جميع أحرف إلى الأحرف الكبيرة
// toLowerCase()  لتحويل جميع أحرف إلى الأحرف الصغير
// concat()     لدمج 2 متغيرات من نوع النصي مع بعض
// trim()   لحذف الفراغات في البداية والنهاية القيمة المتغير
// charAt(رقم) لتحديد حرف الجملة في ذلك الترتيب
// -------------------------------------------------------------------------

//let text = "I love aboodivo ";
//text = text.toUpperCase();
//document.getElementById("title").innerHTML = text;
//___________---__________---________________---__________---________________---__________---_____

// length لإعادة طول النص
// لإعادة تمركز اول قيمة يطابق مع القيمة الذي تحدده في حال توجدها في النص
// indexOf(value)  
// lastIndexOf(value) لإعادة تمركز أخر قيمة يطابق مع القيمة الذي تحدده في حال توجدها في النص
// search(value)  للبحث عن تمركز 
// startsWith(value)للتحقق هل يبدأ النص بنفس القيمة الذي تحددها او لا ويقوم بإعادة قيمة ب صح او خطأ
// endsWith(value) للتحقق هل ينتهي النص بنفس القيمة الذي تحددها او لا ويقوم بإعادة قيمة ب صح او خطأ
// -------------------------------------------------------------------------
//let text = "I love aboodivo ";
//length = text.length;
//document.getElementById("title").innerHTML = length;
//___________---__________---________________---__________---________________---__________---_____
  
// string.replace(searchvalue, newvalue)
//     "searchvalue"
//    / searchvalue /g
//    / searchvalue / i    للبحث عن القيمة - دون تدقيق بالأحرف الصغير او الكبيرة
// substring(start,end)
// -------------------------------------------------------------------------

//let text = "I$learn$JS$JS$JS";
//text = text.replace(/js/gi,"Java");
//text = text.replace(/\$/g," ");
//let CutText = text.substring(8,17);
//document.getElementById("title").innerHTML = CutText;
//___________---__________---________________---__________---________________---__________---_____
//var name = "Diyar";
//var age = 19;
//var isMarried = true;
//var country = "Netherlands";

//var id_1 = ["Diyar",19,true,"Netherlands"];

//console.log("Name: "+ id_1[0] + "\n Age: "+ id_1[1]+ "\nMarried: "+id_1[2] + "\nCountry: " + id_1[3] );

//--------\\
// console.log(id_1.indexOf("Netherlands"));
//--------\\
// console.log(id_1.length);
//___________---__________---________________---__________---________________---__________---_____

//JavaScript Objects - اوبجكت هي نسخة متطورة لتخزين البيانات في فاريبل واحد  بجافاسكربت 
// ---------------------------------------------------------------------
// {}  يتم إنشاء اوبجكت عبر امر 
//
// ---------------------------------------------------------------------
// key : value           وضمنها لتخزين بيانات ضمن اوبجكت  يكون بشكل تالي القوانين :    قيمة : مفتاح
// ---------------------------------------------------------------------
// يمكنك تخزين ضمن المفتاح : بيانات من نوع التالي  
// Arrays, boolean , String , Number , function Return , Objects 

//var data = {
//    name:"abdulrahman",
//    age:20 ,
//    working: true ,
//     language: ["html","css","javscript"]  ,
//    myFunction: function(){
//        return 10 * 10
//    } };
//    data.name = "abdulrahman JavaScript";
// هنا قمنا بإنشاء مفتاح جديد وحددنا قيمة الذي نرغب بتخزينها ضمن المفتاح , وقمنا بإضافته للاوبجت المحدد
//data.color = "Red";

// delete لحذف بيانات من اوبجكت كل ما عليك بتحديد اي قيمة ترغب بحذفها 
// الذي يتواجد ضمن اوبجكت الذي ترغب بحذف بيانات منها مثال:
// delete data.name;     هنا قمنا بحذف مفتاح نئم من اوبجكت مع بياناتها

// الطريقة الأول لعرض البيانات المخزنة ضمن مفاتيح في اوبجكت 
// object.key

// الطريقة الثانية لعرض البيانات المخزنة ضمن مفاتيح في اوبجكت 
// object["key"]

// مثال لطريقة عرض البيانات الموجودة ضمن اوبجكت - قد يفيدك اثناء البرمجة
//console.log(data);

// مثال لطريقة لعرض بيانات المخزنة ضمن فاريبل الذي يتواجد ضمن احد مفاتيح في اوبجكت
//onsole.log(data.name);
//onsole.log(data["name"]);
// مثال لعرض بيانات المخزنة ضمن ارراي الذي يتواجد ضمن احد مفاتيح في اوبجكت
//console.log(data.language[0]);
// مثال لطريقة استدعى فونكشن مخزن ضمن مفتاح في اوبجكت
//console.log(data.myFunction());
//___________---__________---________________---__________---________________---__________---_____
//var users = {
//    user1:{email:"user1@gmail.com" , password:"test1234"} , 
//    user2:{email:"user2@gmail.com" , password:"134342355"} , 
//    user3:{email:"user3@gmail.com" , password:"setgfdrg"}
//};


//alert(users.user3.password);
//alert(users["user1"]["email"]);
//___________---__________---________________---__________---________________---__________---_____
//var points = 95;

//if (points >= 90) {
//  alert("ممتاز");
//} else if (points >= 80) {
//  alert("جيد جدا");
//} else if (points >= 70) {
//  alert("جيد");
//} else if (points >= 60) {
//  alert("مقبول");
//} else {
//  alert("ضعيف");
//}
// ---------------------------------------------------------------------

//      إستخدامه     الرمز	
//      >	        علامة أكبر من
//      <	        علامة أصغر من
//      >=	        علامة أكبر من أو يساوي
//      <=	        علامة أصغر من أو يساوي
//      ==	        القيمتين متساويتين بغض النظر 
//                  عن نوع البيانات أي أن القيمة 1 تساوي القيمة '1'
//      !=	        القيمتين غير متساويتين
//      ===     	القيمتين متساويتين ومن نفس نوع البيانات أي أن القيمة 1 لا تساوي القيمة '1'
//      !==     	القيمتين غير متساويتين مع الأخذ في الإعتبار نوع البيانات
//___________---__________---________________---__________---________________---__________---_____

// Logical operators

// &&  and 
//  ||  or
// !    not 

//var a = true;
//var b = false;

//if(! a == false){
    
//alert("تم تحقيق الشرط");
//}
//else{
//alert("لم يتحقق الشرط")
//}
//___________---__________---________________---__________---________________---__________---_____

// switch (expression) {
//    case value:
//        //statements
//        break;

//    case value:
//        //statements
//        break;

//    default:
//        //statements
//        break;

//}
// ---------------------------------------------------------------------

//var data =2000;
// switch (data) {

//    case 2008:
//        alert("data = 2008");

//        break;

//    case 2007:
//        alert("data = 2007");
//        break;

//    case '2006':
//        alert("data = string 2006");
//        break;
//    case 2006:
//        alert("data = 2006");
//    break;

//    default:
//        alert("default");
//        break;
//}
//------\\

//var fruit = "Mangoe";
//switch(fruit){
//    case "Banana":
//        console.log("السعر الموز 1 دولار");
//        break;
//    case "Appel":
//       console.log("السعر التفاح 2 دولار");
//       break;
//    case  "Orange":
//        console.log("السعر البرتقال 1 ونصف دولار");
//        break;
//    default:
//         console.log("نعتذر هذا النوع من الفاكهه غير متوفر لدينا");
//         break;
//}
//___________---__________---________________---__________---________________---__________---_____

//var count = 0;
//while(count<=150){
//    document.getElementById("while-loop").innerHTML+="Number" + count + "<br>"
//    count++;
//}
//___________---__________---________________---__________---________________---__________---_____

//for(var count = 0; count<=150;++count){
//    document.getElementById("while-text").innerHTML+="Number" + count + "<br>"
//}
//-----\\
//var id1 = ["الاسم: عبدالرحمن ", "العمر :20 ","الدولة :اليمن"]
//for(var count = 0; count<id1.length;count++){
//    document.getElementById("while-text").innerHTML+=id1[count] +"<br>"
//}
//___________---__________---________________---__________---________________---__________---_____

//var i =1;
//while(i<=20){
//    if(i==14){
//        break;
//    }
//    console.log("ID: "+i);
//++i;
//}

//----\\

//for(var count = 0 ; count<= 15 ; count++){
//    if(count== 7){
//        continue;
//    }
//    document.getElementById("while-text").innerHTML+= "ID: " + count + "<br>";
//}

//----\\
//var count =1;
//do{
//    document.getElementById("while-text").innerHTML+= "ID: " + count + "<br>";
//count++;
//}while(count <= 10);
//
////   إختبار 
//for(var i = 0; i>=0; i--)
//{
//alert("We are the best");
//}
//___________---__________---________________---__________---________________---__________---_____

//var body = document.getElementById("body");
//body.style.backgroundColor ="#2e3e61";

//var logo = document.getElementById("logo")
//logo.style.width = "200px";
//logo.style.position= "absolute";
//logo.style.top = "50%";
//logo.style.left = "50%";
//logo.style.transform= "translate(-50%, -50%)";
//___________---__________---________________---__________---________________---__________---_____
// function         مهمة - وظيفة
// return        - إرجاع = إعادة
// parameters    - فاريبل يتم تحديد لها قيمة عند إستدعاء الوظيفة
// -----------------------------------

//function plus(number1,number2){

//    return number1 + number2;
//}

//alert(plus(100 , 200));
//___________---__________---________________---__________---________________---__________---_____

// الكلمة let تمكنك من تعريف متغيرات مقيّدة في الـ block (الدالة - الحلقة) الذي عُرّفت به (يحذها المُفسّر بعد الخروج من البلوك أي إنك إن عرفت a داخل دالة اسمها add لن يتعرف المفسّر على a خارج هذه الدالّة

//     الكلمة var تعرّف المتغيرات globally أي أنّ المتغيّر يعمل على كامل الكود و في أي block

// const  يجعل قيمة المتغير غير قابل للتعديل
//------------------------------------------------------------------------------------------------------------------------------------------------

// var
// تستعمل هذه الكلمة لإنشاء متغيرات داخل الكائن العلوي window وهذه المتغيرات إما أن تكون عامة global يمكن الوصول إليها في جميع أنحاء التطبيق أو قد تكون في نطاق محدد وهو نطاق دالة معينة (function-scoped) بحيث لا يمكن الوصول إليها خارج هذه الدالة (private variables). هذه الكلمة المفتاحية موجودة منذ الإصدارات الأولى لجافاسكريبت ولكن الوقت جاء لإضافة بدائل عنها تكون أكثر مرونة وأمانا حتى تساير هذه اللغة الإيقاع السريع الذي يتقدم به مجال برمجيات الويب والجافاسكريبت بصفة عامة. ولهذا ظهر let في الإصدار الأخير من الجافاسكريبت.

// function varTest() {
//   var x = 1;
//   if (true) {
//     var x = 2; // نفس المتغير
//     console.log(x); // 2
//   }
//   console.log(x); // 2
// }
//---\\
// let
// بعكس var فإن let تمكننا من إنشاء متغيرات تابعة لنطاقات أضيق قد تكون دوال أو فقط تعابير شرطية أو حلقات متكررة وغيرها ولهذا تسمى هذه المتغيرات بالإنجليزية block-scoped أي أنك لا تستطيع الوصول إليها خارج ال block الذي صُرِّح بها فيه.

// function letTest() {
//   let x = 1;
//   if (true) {
//     let x = 2; // متغير آخر
//     console.log(x); // 2
//   }
//   console.log(x); // 1
// }
// وعندما تحاول استعمال متغير قبل التصريح به فإنك ستحصل على خطأ جميل :) في برمجيتك من نوع ReferenceError على عكس ما اعتدنا علينا مع الكلمة المفتاحية var حيث كانت تعطى لكل متغير قيمة افتراضية وهي undefined حتى قبل إنشاء هذا المتغير.
//___________---__________---________________---__________---________________---__________---_____
  
// JavaScript OOP  = object oriented programming
// class            -             فئة 
// constructor      -           البناء 
// object           -            كائن 
// ------------------------------------
//class App{
//    constructor(){
//        alert("Done");
//    }
//}
//onclose = new App();
//onload = new App();
//var app_1 = new App();
//var app_1 = new App();
//___________---__________---________________---__________---________________---__________---_____

// ---------------------------------------
// parameters in methods and constructor
// ---------------------------------------

//class App{
//    constructor(text,img){
//        let content = document.getElementById("content");
//        content.innerHTML = "<img src='" + img + "' />   <h1>" + text + "</h1>";
//    }
//}
//onload =new App("aboodivo","assets/img/logo.png")
//___________---__________---________________---__________---________________---__________---_____

// JavaScript OOP  = object oriented programming
// class            -             فئة 
// constructor      -           البناء 
// object           -            كائن 
// ------------------------------------
// method           -   طريقة - وظيفة
// this  يتم استخدامها لإخبار جافاسكربت بإنك ترغب بتحديد عنصر موجود ضمن ذلك الكلاس
// --------------------------------------------------------------------------

//class App{
//    constructor(){
//
//    }
//    change(){
//        var body = document.getElementById("body");
//        body.style.backgroundColor = "black";
//    }
//}
//
//var app_0 = new App();
//app_0.change();
//___________---__________---________________---__________---________________---__________---_____

// method   - وظيفة | مهمة | طريقة
// return   - إعادة | إسترجاع
// ---------------------------------------
// method return  وظيفة الذي يعيد قيمة  
// ---------------------------------------

//class App{
//    constructor(){
//        var massage = this.getMassage();
//        document.getElementById("title2").innerHTML = this.getMassage();
//    }
//    getMassage(){
//        return "Hi ! مرحباً"
//    }
//}
//onload =new App();
//___________---__________---________________---__________---________________---__________---_____
//  method           parameters   
// ------------------------------

//class App{
//    constructor(){
//        this.setItme("aboody alawadhi:","انا عبدالرحمن العواضي مبرمج مواقع");
//        this.getlanguage("قم بالتحديد :","اللغة العربية");
//        this.getlanguage("","اللغة الانجليزية");
//        this.getlanguage("","اللغة الفرنسية");
//    }
//    getlanguage(title,text){
//        var article1 = document.getElementById("article1");
//        article1.innerHTML += "<h1>" + title + "</h1>";
//        article1.innerHTML += "<button type='button'>" + text + "</button>";
//        article1.style.display ="flex";
//        article1.style.flex ="rew";
//
//    }
//    setItme(setItme){
//        alert(setItme +"\n انا عبدالرحمن العواضي مبرمج مواقع" );
//    }
//}
//onload =new App();
//document.getElementsByTagName("button").style.background= "red";
//___________---__________---________________---__________---________________---__________---_____
//alert(location.pathname);
// location.protocol  Return the protocol of the current URL:
// location.href returns the href (URL) of the current page
// location.hostname returns the domain name of the web host
// location.pathname إرجاع المسار واسم الملف للصفحة الحالية
// location.assign loads a new document
//--------------------------------------------------------------
// locatio.replace();
// location.reload();
//___________---__________---________________---__________---________________---__________---_____
  
//function reload(){
//    location.reload();
//}
//function assign(){
//    location.assign("https://www.youtube.com/"); 
//}
//function replace(){
//    location.replace("index.html");
//}
// location.reload();

// location.assign()

// location.replace();
//___________---__________---________________---__________---________________---__________---_____
  
// document.URL            للحصول على  رابط العنوان الصفحة 
// document.documentURI    للحصول على  رابط العنوان الصفحة
// document.domain              للحصول على  اسم دومين موقع   
//const url = document.URL;
//document.write("URL : " + url);
//___________---__________---________________---__________---________________---__________---_____
// document.title   يتم استخدامها للحصول على عنوان الصفحة او تعديل على عنوان الصفحة  
// document.head                            يتم استخدامها لتحديد راس الصفحة لتحكم بها 
// document.body                            يتم استخدامها لتحديد جسم الصفحة لتحكم بها
// ----------------------------------------------------
//let title = document.title;
//document.title = "aboodivo2";
//document.head.innerHTML += "<style> body{background:red;}</style>";
//
//document.body.onload = ()=>{
//alert("تم اكتمال تحميل الصفحة");
//};
//___________---__________---________________---__________---________________---__________---_____
// Event          -        توضيح
// ---------------------------------------------
// click          -  يحدث الحدث عندما ينقر المستخدم على عنصر
// contextmenu    -  يحدث الحدث عندما ينقر المستخدم بزر الماوس الأيمن على عنصر لفتح قائمة السياق
// dblclick       - يحدث الحدث عندما ينقر المستخدم نقرًا مزدوجًا على عنصر
// mousedown      - يحدث الحدث عندما يضغط المستخدم على زر الماوس فوق عنصر
// mouseenter     - يحدث الحدث عند تحريك المؤشر إلى عنصر
// mouseleave     - يحدث الحدث عند تحريك المؤشر خارج عنصر
// mousemove      - يحدث الحدث عندما يتحرك المؤشر أثناء وجوده فوق عنصر
// mouseout       - يحدث الحدث عندما يحرك مستخدم مؤشر الماوس خارج عنصر أو خارج أحد العناصر التابعة له    
// mouseover      - يحدث الحدث عند تحريك المؤشر على عنصر ، أو على أحد توابعه
// mouseup        -يحدث الحدث عندما يقوم مستخدم بوضع اصبعته على زر الماوس فوق عنصر
// ----------------------------------------------------

//var title = document.getElementById("title");

//title.addEventListener("click",()=>{
//    alert("يحدث الحدث عندما ينقر المستخدم على عنصر")
//});
//title.addEventListener("contextmenu",()=>{
//    alert("يحدث الحدث عندما ينقر المستخدم بزر الماوس الأيمن على عنصر لفتح قائمة السياق")
//});
//title.addEventListener("dblclick",()=>{
//    alert("يحدث الحدث عندما ينقر المستخدم نقرًا مزدوجًا على عنصر")
//});
//title.addEventListener("mousedown",()=>{
//    alert("يحدث الحدث عندما يضغط المستخدم على زر الماوس فوق عنصر")
//});
//title.addEventListener("mouseenter",()=>{
//    alert("يحدث الحدث عند تحريك المؤشر إلى عنصر")
//});
//title.addEventListener("mouseleave",()=>{
//    alert("يحدث الحدث عند تحريك المؤشر خارج عنصر")
//});
//
//title.addEventListener("mouseout",()=>{
//    alert(" يحدث الحدث عندما يتحرك المؤشر أثناء وجوده فوق عنصر")
//});
//title.addEventListener("mouseover",()=>{
//    alert("يحدث الحدث عندما يحرك مستخدم مؤشر الماوس خارج عنصر أو خارج أحد العناصر التابعة له    ")
//});
//title.addEventListener("mouseup",()=>{
//    alert("يحدث الحدث عندما يقوم مستخدم بوضع اصبعته على زر الماوس فوق عنصر")
//});
//___________---__________---________________---__________---________________---__________---_____
  
// onbeforeunload - beforeunload     يتم إستخدامها لكي تتمكن من تنفيذ اوامر عندما يقوم المستخدم بالإغلاق الصفحة او إعادة تحميل الصفحة

// onbeforeprint  - beforeprint يتم استخدامها لتنفيذ اوامر قبل بدء عملية الطبع

// onafterprint   - afterprint يتم استخدامها لتنفيذ الأوامر بعد اكتمال عملية الطبع
//___________---__________---________________---__________---________________---__________---_____
// Event       -     addEventListener 
// ---------------------------------------------------------
// onkeyup     -     keyup لتنفيذ الأوامر عند نقر على احد ازرار كيبورد ورفع اصبع عنها
// onkeydown   -     keydown             لتنفيذ الأوامر  بمجرد نقر على احد ازرار كيبورد
//------------------------------------
//    لتنفيذ الأوامر  بمجرد نقر على احد ازرار كيبورد - يعمل فقط على ازرار حروف وارقام 
// onkeypress    -     keypress 
//------------------------------------
// method : key         code
// ---------------------------------------------------------
// abdulrahman - instagram : http://instagram.com/aboody_alawadhi
//-----------------------------------------------------------

//document.addEventListener("keyup",(event)=>{
//    if(event.key === "Enter"){
//      alert("قمت بنقر على زر انتر");
//    }
//  
//  });
//  
//  function run_key(event){
    // if(event.key  == "1"){
    //   location.reload();
    // }
    // if(event.code === "KeyB"){
    //   alert(event.code);
    // }
    // alert(event.key);
 // }
 //___________---__________---________________---__________---________________---__________---_____

// function orientation(){
//   if(screen.orientation.type =="portrait-primary" || screen.orientation.type =="portrait-secondary"  ){
// document.body.style.background = "red";
// }else if(screen.orientation.type =="landscape-primary" ||  screen.orientation.type =="landscape-landscape-secondary" ){
//   document.body.style.background = "yellow";
// }
// }

// addEventListener("load",orientation);
// addEventListener("orientationchange",orientation);


//class Orientation{
//  constructor(){
//    addEventListener("load",()=>{
//      this.orientation();
//    });
//addEventListener("orientationchange",()=>{
//  this.orientation();
//});
//  }
//
//  orientation(){
//    if(screen.orientation.type =="portrait-primary" || screen.orientation.type =="portrait-secondary"  ){
//document.body.style.background = "red";
//}else if(screen.orientation.type =="landscape-primary" ||  screen.orientation.type =="landscape-landscape-secondary" ){
//  document.body.style.background = "yellow";
//}
//  }
//}
//onload = new Orientation();
//___________---__________---________________---__________---________________---__________---_____
//var deviceSystem = navigator.userAgent.toLowerCase();
//
//// لأجل تنفيذ الأوامر على اجهزة بنظام اندرويد
//
//if(deviceSystem.includes("android")){
//alert("انا مستخدم اندوريد");
//}
//
//// لأجل تنفيذ الأوامر على اجهزة بنظام ايفون
//if(deviceSystem.includes("iphone")){
//    alert("انا مستخدم ايفون");
//}
//
//// لأجل تنفيذ الأوامر على اجهزة بنظام ايباد
//if(deviceSystem.includes("ipad")){
//    alert("انا مستخدم ايباد");
//}
//
//// لأجل تنفيذ الأوامر على اجهزة بنظام ويندوز
//if(deviceSystem.includes("windows")){
//    alert("انا مستخدم ويندوز");
//}
//___________---__________---________________---__________---________________---__________---_____
//var deviceSystem = navigator.userAgent.toLowerCase();
//
//// لأجل تنفيذ الأوامر على متصفح كروم
//
//if(deviceSystem.includes("chrome")){
//alert("انا مستخدم كروم");
//}
//
//// لأجل تنفيذ الأوامر على متصفح فوكس
//if(deviceSystem.includes("firefox")){
//    alert("انا مستخدم فاير فوكس");
//}
//if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(navigator.userAgent)){
//    //mobile
//    alert("انا استخدم الهاتف");
//}else{
//    alert("انا استخدم الكمبيوتر")
//}
//
//___________---__________---________________---__________---________________---__________---_____

// window.open(URL);              يتم استخدامها لفتح رابط الذي تحدده في نافذة جديدة
// window.top.close();                 يتم استخدامها لإغلاق النافذة عندما يتم تنفيذها
// window.stop();               يتم استخدامها لإيقاف تحميل النافذة عندما يتم تنفيذها
// window.print();             يتم استخدامها لفتح طابعة لطبع صفحة عندما يتم تنفيذها    
//------------------------------------------------------------------
// abdulrahman - instagram : http://instagram.com/aboody_alawadhi
//---------------------------------------------------

//document.getElementById("open_link").addEventListener("click",()=>{
//    
//    window.open("http://aboody.net");
//  });
//  
  // document.getElementById("open_print").addEventListener("click",()=>{
  //     window.print();
  // });
  
  // window.top.close();
  //___________---__________---________________---__________---________________---__________---_____

// window.prompt("message");لعرض شاشة منبثقة للمستخدم بها حقل يمكن لمستخدم كتابة نص ضمنها
//----------------------------------------------------------------------------
// window.confirm("message");يتم استخدامها لعرض شاشة منبثة للمستخدم بها خيار تاكيد او الغاء           
//----------------------------------------------------------------------------
// abdulrahman - instagram : http://instagram.com/aboody_alawadhi
//--------------------------------------------------------------------------
// var username = prompt("ضع اسم المستخدم : ");
// var password = prompt("ضع كلمة المرور");
// if(username === "admin1" && password ==="1234"){
// alert("بيانات صحيحة");
// }else{
//     alert("بيانات غير صحيحة");
// }

//var confirm = confirm("هل انت متاكد انك ترغب بقيام بذلك");
//
//if(confirm == true){
//alert("قمت بنقر على موافق");
//}
//___________---__________---________________---__________---________________---__________---_____

//var idLogo = document.getElementById("logo");

// if(idLogo.hasAttribute){
// alert("نعم");
// }


//console.log(idLogo.getAttribute("class"));
//
//idLogo.setAttribute("src","assets/img/logo.png");
//idLogo.setAttribute("width","40%");
//idLogo.setAttribute("height","300px");
//
//idLogo.removeAttribute("class");
//idLogo.removeAttribute("height");

// hasAttribute
// getAttribute
// setAttribute 
// removeAttribute
//___________---__________---________________---__________---________________---__________---_____
//
//class MyPage{
//
//    constructor(){
//
//    }
//
//}
//
//onload = new MyPage();


//  setTimeout 
//  يتم إستخدامها لتاخير تنفيذ الأوامر الذي تقوم بتحديدها
//  حسب المدة الذي تحددها 

// clearTimeout 
// يتم استخدامها لأجل حذف المؤقت 
// setTimeout
// مثال

//function myFunction(){
//    alert("تم استدعاء الأوامر")
//}
// هنا قمنا بإنشاء متغير وتخزين ضمنها العنصر مؤقت لتنفيذ اوامر 
// و طلبنا بإستدعاء فونكشن بعد 
// 3
// ثواني لان 
// كل 1000 
// يكون 1 ثاني
// يمكنك تحديد بنفسك المدة
//var mySetTimeOut = setTimeout(myFunction, 3000 );


// هنا قلنا عند يتم استدعاء فونكشن نرغب بإلغاء المؤقت 
// المخزن ضمن المتغير الذي يسمى
// mySetTimeOut


//function clearTimeout(){
//    clearTimeout(mySetTimeOut);
//}
//___________---__________---________________---__________---________________---__________---_____
//class MyPage{
//    constructor(){
//      this.myInterval = setInterval(()=>{
//  
//        this.testInterVal();
//        this.test2();
//      },4000);
//  
//      document.getElementById("stop").addEventListener("click",()=>{
//        this.stopInterVal();
//      });
//  
//    }
//    testInterVal(){
//      alert("يعمل");
//    }
//    test2(){
//      console.log("test");
//    }
//    stopInterVal(){
//      clearInterval(this.myInterval);
//    }
//  }
//  onload = new MyPage();
  
  // function test(){
  //   alert("HI");
  // }
  // var myInterval = setInterval(test,3000);
  
  // function stopInterval(){
  //   clearInterval(myInterval);
  // }
//___________---__________---________________---__________---________________---__________---_____

// methods of classList             -           وظيفة
// --------------------------------------------------------------------------------------
// add(class1, class2, ...)	                         لإضافة كلاس او اكثر إلى عنصر المحدد          
// contains(class)	        لتحقق إن كان الكلاس الذي تحدده يتواجد في عنصر المحدد او لا
// remove(class1, class2, ...)	               لحذف كلاس او اكثر من كلاس من عنصر المحدد
// item(index)	                       لمعرفة أسم كلاس الذي يتواجد في تمركز الذي تحدده
// length                               لمعرفة عدد اسماء كلاسات متواجد ضمن عنصر المحدد
// --------------------------------------------------------------------------------------

// document.getElementById("content").classList.add("text","text2");

// var isContains = document.getElementById("content").classList.contains("div3");
// alert(isContains);

// document.getElementById("content").classList.remove("div2","div3");

// alert(document.getElementById("content").classList.item(3));

// alert(document.getElementById("content").classList.length);

// document.getElementById("content").classList.add("text");

//document.getElementById("button1").onclick = ()=>{
////  document.getElementById("content").classList.remove("text");
  //};
//___________---__________---________________---__________---________________---__________---_____
// screen.width
// screen.height
//document.getElementById("logo").style.display= "none";

//if(screen.width <=640){
//document.body.style.background = "red";
//document.getElementById("logo").style.display= "inherit";
//}