import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, FlatList, Image, RefreshControl, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Swipeout from 'react-native-swipeout';

    // green:    #7bbe50,
    // blue:  #188ee1,

const users = [{
  "id": 1,
  "first_name": "اطبع برينت",
  "last_name": "Jovovic",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "djovovic0@nyu.edu",
  "image_url": "https://www.print.sa/dist/img/icon/og/printdotsa_og.png"
}, {
  "id": 2,
  "first_name": "المؤسسة العامة للتعاقد",
  "last_name": "Fernely",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "sfernely1@lulu.com",
  "image_url": "http://www.pension.gov.sa/MediaCenter/PublishingImages/PPALogo1.jpg"
}, {
  "id": 3,
  "first_name": "منصة معروف",
  "last_name": "McCudden",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "bmccudden2@google.ca",
  "image_url": "https://media.licdn.com/dms/image/C4E0BAQHrew0jJ7zkfg/company-logo_200_200/0?e=2159024400&v=beta&t=5DyVBZM1i7f_bESPFNuos7_EH8MQfzbp63_Cb-L8Z30"
}, {
  "id": 4,
  "first_name": "نظام مسار",
  "last_name": "Yair",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "myair3@posterous.com",
  "image_url": "https://pta.gov.sa/assets/images/iconapp.png"
}, {
  "id": 5,
  "first_name": "روافد",
  "last_name": "Adlam",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "jadlam4@blog.com",
  "image_url": "https://portal.bu.edu.sa/image/journal/article?img_id=47506091&t=1556005405981"
}, {
  "id": 6,
  "first_name": "وزارة المالية",
  "last_name": "MacCarlich",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "mmaccarlich5@blogspot.com",
  "image_url": "https://www.mof.gov.sa/generalservcies/importantlinks/DocLib/new/Ministries/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D9%82%D9%84.png"
}, {
  "id": 7,
  "first_name": "مراس",
  "last_name": "Massot",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "pmassot6@dyndns.org",
  "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwVFv2KuEEhTwhFs-I8ZuZt7KU2ZNTjM9EA7-8DXnOe3ySSTXfA"
}, {
  "id": 8,
  "first_name": "العنوان الوطني",
  "last_name": "Hungerford",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "dhungerford7@cargocollective.com",
  "image_url": "https://s3-eu-west-1.amazonaws.com/content.argaamnews.com/9d5fdbc4-5aa0-46bf-a8a9-c7fcb17ebec4.jpg"
}, {
  "id": 9,
  "first_name": "وزارة الحج والعمرة",
  "last_name": "Goldes",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "fgoldes8@google.com.hk",
  "image_url": "https://cdn.sabq.org/uploads/media-cache/resize_800_relative/uploads/material-file/5b54720f51a773b72d6ea060/5b54720858058.jpg"
}, {
  "id": 10,
  "first_name": "بنان التقنية",
  "last_name": "Sole",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "psole9@blogs.com",
  "image_url": "https://pbs.twimg.com/profile_images/1026770106100146181/tvLOXUQV_400x400.jpg"
}, {
  "id": 11,
  "first_name": "مسك الخيرية",
  "last_name": "Polglaze",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "lpolglazea@kickstarter.com",
  "image_url": "https://pbs.twimg.com/profile_images/912002658290077701/0eY_jBQX_400x400.jpg"
}, {
  "id": 12,
  "first_name": "بادر - حاضنات التقنية",
  "last_name": "Ambrodi",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "gambrodib@dion.ne.jp",
  "image_url": "https://www.badir.com.sa/sites/default/files/styles/thumbnail_news_100_100_/public/2019-04/%D8%B4%D8%B9%D8%A7%D8%B1%20%D8%A8%D8%A7%D8%AF%D8%B1-02_0.png?itok=TytqO9sq"
}, {
  "id": 13,
  "first_name": "ايجار",
  "last_name": "Jewar",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "hjewarc@fda.gov",
  "image_url": "https://twasul.info/wp-content/themes/twasul/timthumb/?src=https://mobile.twasul.info/wp-content/uploads/2018/10/%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1.jpg&w=1279097&h="
}, {
  "id": 14,
  "first_name": "مركز الملك سلمان لأبحاث الإعاقة",
  "last_name": "Montgomery",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "bmontgomeryd@typepad.com",
  "image_url": "https://www.alweeam.com.sa/wp-content/uploads/2017/08/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%85%D9%84%D9%83-%D8%B3%D9%84%D9%85%D8%A7%D9%86-%D9%84%D8%A3%D8%A8%D8%AD%D8%A7%D8%AB-%D8%A7%D9%84%D8%A5%D8%B9%D8%A7%D9%82%D8%A9.jpeg"
}, {
  "id": 15,
  "first_name": "مركز وارف",
  "last_name": "Bartolomucci",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "dbartolomuccie@ning.com",
  "image_url": "https://www.hiamag.com/sites/default/files/styles/ph2_960_600/public/article/13/02/2018/6507906-1705947288.jpg"
}, {
  "id": 16,
  "first_name": "تطبيق وطني",
  "last_name": "Fridd",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "rfriddf@samsung.com",
  "image_url": "https://pbs.twimg.com/profile_images/1023474826370056192/itHcBuSq.jpg"
}, {
  "id": 17,
  "first_name": "سحاب - للدعاية والإعلان والتسويق الرقمي",
  "last_name": "Behrendsen",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "ibehrendseng@artisteer.com",
  "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhJvXnE_S2vQGlNARULM9Db7CCwTMJ6jf-pm6ZZslwHbq6mPI"
}, {
  "id": 18,
  "first_name": "منصة تطبيق الدورات",
  "last_name": "Piggins",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "tpigginsh@parallels.com",
  "image_url": "https://pbs.twimg.com/profile_images/901124436451106816/J-5LQ_xr_400x400.jpg"
}, {
  "id": 19,
  "first_name": "منصة حراج",
  "last_name": "Mewe",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "emewei@craigslist.org",
  "image_url": "https://pbs.twimg.com/profile_images/412181432543363072/Z5JPLHa9.jpeg"
}, {
  "id": 20,
  "first_name": "منصة نون",
  "last_name": "Given",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "bgivenj@ameblo.jp",
  "image_url": "https://rowadbusiness.com/wp-content/uploads/2018/12/%D9%83%D9%8A%D9%81%D9%8A%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B9-%D9%81%D9%8A-%D9%85%D9%88%D9%82%D8%B9-%D9%86%D9%88%D9%86.jpg"
}, {
  "id": 21,
  "first_name": "AliExpress",
  "last_name": "Stocks",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "hstocksk@opera.com",
  "image_url": "https://images-eu.ssl-images-amazon.com/images/I/413RHWsREDL.png"
}, {
  "id": 22,
  "first_name": "السوق المفتوح",
  "last_name": "Float",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "lfloatl@china.com.cn",
  "image_url": "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/a9/3d/10/a93d1036-2b01-0eb3-499a-b043cea0e64e/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/246x0w.jpg"
}, {
  "id": 23,
  "first_name": "منصة نعناع",
  "last_name": "Cooke",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "ccookem@cisco.com",
  "image_url": "https://pbs.twimg.com/profile_images/878690223403798529/dq89c-ns.jpg"
}, {
  "id": 24,
  "first_name": "تطبيق مرسول",
  "last_name": "Hazeup",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "chazeupn@weibo.com",
  "image_url": "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/3a/75/a4/3a75a418-2dae-054f-4936-02ef239d3e70/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/246x0w.jpg"
}, {
  "id": 25,
  "first_name": "تطببيق هنقر ستيشين",
  "last_name": "Bosward",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "bboswardo@earthlink.net",
  "image_url": "https://gulf365.co/content/uploads/2019/03/19/2a868423b5.jpg"
}, {
  "id": 26,
  "first_name": "تطبيق كاريدج",
  "last_name": "Gilroy",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "tgilroyp@plala.or.jp",
  "image_url": "https://couponsah.com/wp-content/uploads/2018/03/%D9%83%D8%A7%D8%B1%D9%8A%D8%AF%D8%AC.png"
}, {
  "id": 27,
  "first_name": "زاد",
  "last_name": "Obey",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "cobeyq@gravatar.com",
  "image_url": "https://pbs.twimg.com/profile_images/1106202980024496128/AC9DQVX6_400x400.jpg"
}, {
  "id": 28,
  "first_name": "شاورمر",
  "last_name": "Klimschak",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "mklimschakr@altervista.org",
  "image_url": "https://hsaa.hsobjects.com/h/restaurants/logo_ars/000/001/418/c4537d437e65f027fadbf9720063ec63-original.png"
}, {
  "id": 29,
  "first_name": "برقر كينج",
  "last_name": "Petersen",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "ppetersens@cam.ac.uk",
  "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/512px-Burger_King_Logo.svg.png"
}, {
  "id": 30,
  "first_name": "مركز غراس",
  "last_name": "Goodreid",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "tgoodreidt@ucoz.ru",
  "image_url": "https://pbs.twimg.com/profile_images/980671622611898369/eUegGBxt.jpg"
}, {
  "id": 31,
  "first_name": "مركز بناء القادة التربوي بالقويعية",
  "last_name": "Matton",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "cmattonu@istockphoto.com",
  "image_url": "https://pbs.twimg.com/profile_images/527206610297303041/lWdj4MPD_400x400.jpeg"
}, {
  "id": 32,
  "first_name": "منصة إدراك",
  "last_name": "Cownden",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "bcowndenv@yolasite.com",
  "image_url": "http://nna-leb.gov.lb/files/pictures/1517229093_ScreenShot20150908at3.02.21PM0.png"
}, {
  "id": 33,
  "first_name": "منصة رواق",
  "last_name": "Nana",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "rnanaw@youtu.be",
  "image_url": "http://inma.net.sa/wp-content/uploads/Rwaq-1.png"
}, {
  "id": 34,
  "first_name": "منصة مهارة",
  "last_name": "Primarolo",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "cprimarolox@t-online.de",
  "image_url": "http://cdn.akhbaar24.com/bc593a94-038b-4628-a148-6354ccbaaaed.jpg"
}, {
  "id": 35,
  "first_name": "منصة دروب",
  "last_name": "Moniker",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "imonikery@japanpost.jp",
  "image_url": "https://ryada.sa/wp-content/uploads/2016/02/%D8%AF%D8%B1%D9%88%D9%88%D8%A8.jpg"
}, {
  "id": 36,
  "first_name": "Edx",
  "last_name": "Sankey",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "nsankeyz@storify.com",
  "image_url": "https://pbs.twimg.com/profile_images/717789136606928896/ddrecp7p.jpg"
}, {
  "id": 37,
  "first_name": "Coursera",
  "last_name": "Philcott",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "aphilcott10@tuttocitta.it",
  "image_url": "https://images-na.ssl-images-amazon.com/images/I/31dVKrUBBVL._SY355_.png"
}, {
  "id": 38,
  "first_name": "TedX Ideas",
  "last_name": "Winch",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "fwinch11@microsoft.com",
  "image_url": "http://tedxdonauinsel.at/wp-content/uploads/2016/02/about-tedx.png"
}, {
  "id": 39,
  "first_name": "VOX",
  "last_name": "Reicharz",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "hreicharz12@amazon.com",
  "image_url": "http://photo.elcinema.com.s3.amazonaws.com/uploads/_310x310_9ad5cdee298cc9765c7d87bfa86556533633d9b3fe8f61b1cb43a3f1129ce0dd.jpg"
}, {
  "id": 40,
  "first_name": "NETFLIX",
  "last_name": "Dobsons",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "cdobsons13@examiner.com",
  "image_url": "https://cdn-images-1.medium.com/max/1200/1*ty4NvNrGg4ReETxqU2N3Og.png"
}, {
  "id": 41,
  "first_name": "الهيئة العامة للترفيه",
  "last_name": "Priestnall",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "kpriestnall14@google.pl",
  "image_url": "https://aawsat.com/sites/default/files/styles/article_img_top/public/2017/10/21/economy-221017-c.jpg?itok=_msA4fhA"
}, {
  "id": 42,
  "first_name": "المؤسسة العامة للتدريب التقني والمهني",
  "last_name": "Grinov",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "jgrinov15@marriott.com",
  "image_url": "https://rasdnews.net/news/wp-content/uploads/%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8-%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A.jpg"
}, {
  "id": 43,
  "first_name": "Andela Africa",
  "last_name": "Canadine",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "dcanadine16@google.ca",
  "image_url": "https://pbs.twimg.com/profile_images/689851478706626561/yaVQgTCw_400x400.png"
}, {
  "id": 44,
  "first_name": "GDG - Google Developer Groups",
  "last_name": "Althorpe",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "halthorpe17@123-reg.co.uk",
  "image_url": "https://pbs.twimg.com/profile_images/756869521361821696/gNPOjM-y.jpg"
}, {
  "id": 45,
  "first_name": "SBC",
  "last_name": "Hubble",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "chubble18@facebook.com",
  "image_url": "https://pbs.twimg.com/profile_images/985230951822315521/TTbJWcGr_400x400.jpg"
}, {
  "id": 46,
  "first_name": "Pepsi",
  "last_name": "Saberton",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "csaberton19@craigslist.org",
  "image_url": "https://pbs.twimg.com/profile_images/816911107587710976/8qAMv2kh_400x400.jpg"
}, {
  "id": 47,
  "first_name": "بن داوود",
  "last_name": "Harteley",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "aharteley1a@tmall.com",
  "image_url": "https://pbs.twimg.com/profile_images/848470321338474496/n9p0dg3p.jpg"
}, {
  "id": 48,
  "first_name": "Coaca Cola",
  "last_name": "Mackleden",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "bmackleden1b@google.co.uk",
  "image_url": "http://www.cocacola.ie/content/dam/GO/CokeZone/Common/global/open-graph/Opening-graphic_disk.jpg"
}, {
  "id": 49,
  "first_name": "اكسترا",
  "last_name": "Coviello",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "acoviello1c@marketwatch.com",
  "image_url": "https://pbs.twimg.com/media/CedMjJ-XEAA8E8i.jpg"
}, {
  "id": 50,
  "first_name": "العثيم القابضة",
  "last_name": "Clausner",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "cclausner1d@house.gov",
  "image_url": "https://upload.wikimedia.org/wikipedia/ar/d/d6/Othaimmarkets.jpg"
}, {
  "id": 51,
  "first_name": "أسواق بنده",
  "last_name": "Bruneau",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "abruneau1e@csmonitor.com",
  "image_url": "http://www.ylcac1.com/wp-content/uploads/2016/11/cbe8fe17095d9230bef372996665a954.jpg"
}, {
  "id": 52,
  "first_name": "وزارة الإتصالات وتقنية المعلومات",
  "last_name": "Megahey",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "dmegahey1f@deliciousdays.com",
  "image_url": "https://www.almowaten.net/wp-content/uploads/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%D8%A7%D8%AA-%D9%88%D8%AA%D9%82%D9%86%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA.jpg"
}, {
  "id": 53,
  "first_name": "وزارة الداخلية",
  "last_name": "Folk",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "efolk1g@washingtonpost.com",
  "image_url": "https://pbs.twimg.com/profile_images/1073305064494780416/vfsVINCY_400x400.jpg"
}, {
  "id": 54,
  "first_name": "منصة رصد",
  "last_name": "Wybrow",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "kwybrow1h@gravatar.com",
  "image_url": "https://pbs.twimg.com/profile_images/1013775382942806016/BunE1Q6L.jpg"
}, {
  "id": 55,
  "first_name": "صحيفة سبق",
  "last_name": "Vaux",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "lvaux1i@prnewswire.com",
  "image_url": "https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/33/0e/08/330e0836-0c81-c074-b5af-b94e7b20854a/AppIcon-1x_U007emarketing-85-220-0-6.png/246x0w.jpg"
}, {
  "id": 56,
  "first_name": "صحيفة الرياض",
  "last_name": "Camelli",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "lcamelli1j@auda.org.au",
  "image_url": "http://www.alriyadh.com/theme2/imgs/404.png"
}, {
  "id": 57,
  "first_name": "صحيفة مكة",
  "last_name": "Passey",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "bpassey1k@craigslist.org",
  "image_url": "https://makkahnewspaper.com/uploads/images/2016/10/29/640888.jpg"
}, {
  "id": 58,
  "first_name": "صحيفة عكاظ",
  "last_name": "Elcoux",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "delcoux1l@stumbleupon.com",
  "image_url": "https://pbs.twimg.com/profile_images/1044993051335303168/i4Hmo16a_400x400.jpg"
}, {
  "id": 59,
  "first_name": "صحيفة المدينة",
  "last_name": "Lamblot",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "klamblot1m@flickr.com",
  "image_url": "https://almawaddah.org.sa/sites/default/files/imagecache/Normal/41850444-almadinalogo.png"
}, {
  "id": 60,
  "first_name": "صحيفة الوطن",
  "last_name": "Durtnal",
  "promo_detail": "هذا العرض مقدم من خلال تطبيق عليان والعرض حصري للمستخدمين المسجلين في تطبيق عليان ولديهم الرغبة في الإستفادة من هذا العرض خلال فترة سريان العرض في متاجرنا في الرياض وباقي مدن المملكة العربية السعودية",
  "promo_date": "1-5-2019",
  "email": "mdurtnal1n@stanford.edu",
  "image_url": "https://rissala24.info/wp-content/uploads/2018/10/190c63a391474ac4b4edfb260276eb79.jpg"
}];
export class PrivateMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      pageIndex: 5,
      lang: 'ar'
    };
  }

  componentDidMount() {
    this.setState({users: this.state.users.filter((item) => item.id <= this.state.pageIndex)})
  }

  _refresh = () => {
      this.setState({refreshing: true});
      this.setState({pageIndex: this.state.pageIndex += 5, users: users.filter((item) => item.id <= this.state.pageIndex), refreshing: false})
  }
  _keyExtractor = (item, index) => item.id.toString();


  _renderItem = ({item}) => {
    let swipeoutDelBtns = [
      {
        text: 'Delete',
        onPress: () => {
          alert('deleted: ' + item.id)
        },
        component: (
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center', marginVertical: 'auto'}}>
            <Icon name="md-trash" size={30} color="#fff"/>
          </View>
        ),
        backgroundColor: '#DC143C',
        underlayColor: '#DC143C'
      }
    ]

    let swipeoutEditBtns = [
      {
        text: 'Reply',
        onPress: () => {
          alert('reply to: ' + item.id)
        },
        component: (
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center', marginVertical: 'auto'}}>
            <Icon name="ios-redo" size={30} color="#fff"/>
          </View>
        ),
        backgroundColor: '#188ee1',
        underlayColor: '#188ee1'
      }
    ]

    if(this.state.lang == 'ar') {
      return (
        <View key={item.id} style={{ padding: 3, width: '100%', borderBottomWidth: 1, borderBottomColor: '#eee'}}>
          <Swipeout backgroundColor="#fff" autoClose={true} right={swipeoutDelBtns} left={swipeoutEditBtns}> 
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
          
                      <View style={{flex: 1, alignItems: 'flex-end', padding: 8}}>
                      
                        <Text style={{fontSize: 16, textAlign: 'right', color: '#188ee1'}}>{item.first_name}</Text>
                        <Text style={{fontSize: 13, marginTop:5, textAlign: 'right'}}>{item.promo_detail}</Text>
                        <Text style={{fontSize: 13, marginTop:5, textAlign: 'right', color: 'gray'}}>منذ ساعة</Text>
                        {/* <View style={{width: '80%', flex: 1, padding: 15,margin: 10, flexDirection: 'row', backgroundColor: '#f5f5f5', justifyContent: 'space-around', borderRadius: 25, borderWidth: 1, borderColor: '#7bbe50'}}>
                          <TouchableOpacity activeOpacity={.6} onPress={() => {}}>
                            <Icon name="md-create" size={22} color="#188ee1"/>
                          </TouchableOpacity>
                          
                          <TouchableOpacity activeOpacity={.6} onPress={() => {}}>
                            <Icon name="md-trash" size={22} color="#DC143C"/>
                          </TouchableOpacity>
                        </View> */}
                      </View>
            
                      <View>
                        <View style={{margin: 15,justifyContent: 'center',alignItems: 'center', height: 60, width: 60, backgroundColor: item.id % 2 == 0 ? 'purple' : 'steelblue', borderRadius: 35}}>
                          <Text style={{color: '#fff', fontSize: 22}}>{item.first_name[0] + " " + item.first_name[1]}</Text>
                        </View>
                      </View>
              
          </View>
          </Swipeout> 
        </View>
      )
    }else {
      return (
        <View key={item.id} style={{ padding: 3, width: '100%', borderBottomWidth: 1, borderBottomColor: '#eee'}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>  
            <View>
              <Image
                source={{uri: item.image_url}} 
                style={{height: 80, width: 80}}
              />
            </View>

            <View style={{flex: 1, alignItems: 'flex-start', padding: 8}}>
              <Text style={{fontSize: 17, color: '#188ee1'}}>{item.first_name}</Text>
              <Text style={{fontSize: 13, marginTop:5, textAlign: 'left'}}>{item.promo_detail}</Text>
            </View>
          </View>
        </View>
      )
    }

  } // end of renderItem()

  render() {
    const { lang, strings } = this.props.language;
    const { home_tab } = strings;
    this.lang = lang;
  
    return (
      <View style={{flex: 1}}>
      <StatusBar backgroundColor="#000"/>
        <TouchableOpacity activeOpacity={.8} style={this.state.lang == 'ar' ? styles.arFab : styles.enFab}>
              <Icon name="md-add" size={22} color="#fff"/>
        </TouchableOpacity>
        <FlatList
            style={{flex: 1}}
            data={this.state.users}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            refreshControl={<RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._refresh}
                colors={['#7bbe50','#188ee1']}
              />}
            
          />
      </View>
    );
  } // end of render()
}

const styles = StyleSheet.create({
  arFab: {
    width: 60,  
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',  
    borderRadius: 30,            
    backgroundColor: '#000',                                    
    position: 'absolute',  
    zIndex: 1,                                        
    bottom: 10,                                                    
    left: 10 ,
  },
  enFab: {
    width: 60,  
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',  
    borderRadius: 30,            
    backgroundColor: '#000',                                    
    position: 'absolute',  
    zIndex: 1,                                        
    bottom: 10,                                                    
    right: 10 ,
  }
})

const mapStateToProps = state => {
  const { language } = state;
  return { language };
}

const mapDispatchToProps = dispatch => {
return bindActionCreators({
  // changeToArabic,
  // changeToEnglish
}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateMessages)