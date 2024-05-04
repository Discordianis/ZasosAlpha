const ongoingsRanobe = document.querySelector('.ongoings');
const freshUpdatesRanobe = document.querySelector('.fresh-updates div');
const dalRanobe = document.querySelector('.project-DAL');
const forumThemes = document.querySelector('.forum-themes div');
const reviewsRanobe = document.querySelector('.reviews-ranobe div');
const collectionsRanobe = document.querySelector('.collections-ranobe div');
const weeklyTopUsers = document.querySelector('.weekly-top-users div');
const newestRanobe = document.querySelector('.newest-ranobe div');

let elemForRemove = [];
for (let i = 0; i < 8; i++) {
    let ongoingHref = document.createElement('div');
    ongoingHref.setAttribute('class', 'ong-b ph15')
    let ongoingImg = document.createElement('div');
    ongoingImg.setAttribute('class', 'ong-i ph15-cover');
    let ongoingSpan = document.createElement('div');
    ongoingSpan.setAttribute('class', 'ong-s ph15-span');
    let ongoingSpan2 = document.createElement('div');
    ongoingSpan2.setAttribute('class', 'ong-s2 ph15-span');
    ongoingHref.appendChild(ongoingImg);
    ongoingHref.appendChild(ongoingSpan);
    ongoingHref.appendChild(ongoingSpan2);
    ongoingsRanobe.appendChild(ongoingHref);
    elemForRemove.push(ongoingHref);
}
for (let i = 0; i < 15; i++) {
    let freshDiv = document.createElement('div');
    freshDiv.setAttribute('class', 'fr-b ph15');
    let freshImg = document.createElement('div');
    freshImg.setAttribute('class', 'fr-i ph15-cover');
    let freshTitle = document.createElement('div');
    freshTitle.setAttribute('class', 'fr-s ph15-span');
    let freshCurrentChp = document.createElement('div');
    freshCurrentChp.setAttribute('class', 'fr-s2 ph15-span');
    let freshTimeCreated = document.createElement('div');
    freshTimeCreated.setAttribute('class', 'fr-s3 ph15-span');
    let freshText = document.createElement('div');
    freshText.setAttribute('class', 'fr-t');
    freshText.appendChild(freshTitle);
    freshText.appendChild(freshCurrentChp);
    freshText.appendChild(freshTimeCreated);
    freshDiv.appendChild(freshImg);
    freshDiv.appendChild(freshText);
    freshUpdatesRanobe.appendChild(freshDiv);
    elemForRemove.push(freshDiv);
}
for (let i = 0; i < 4; i++) {
    let themeBlock = document.createElement('div');
    themeBlock.setAttribute('class', 'th-b ph15');
    let themeHref = document.createElement('div');
    themeHref.setAttribute('class', 'th-s ph15-span')
    themeBlock.appendChild(themeHref);
    forumThemes.appendChild(themeBlock);
    let forumThemesHref = document.querySelector('.forum-themes a');
    forumThemesHref.href = 'forum/discussions'
    elemForRemove.push(themeBlock);

    let reviewHref = document.createElement('div');
    reviewHref.setAttribute('class', 're-b ph15');
    let reviewImg = document.createElement('div');
    reviewImg.setAttribute('class', 're-i ph15-cover');
    let reviewImgDiv = document.createElement('div');
    reviewImgDiv.setAttribute('class', 're-ib')
    let reviewType = document.createElement('div');
    reviewType.setAttribute('class', 're-type ph15-span');
    let reviewTitle1 = document.createElement('div');
    reviewTitle1.setAttribute('class', 're-t-1 ph15-span');
    let reviewTitle2 = document.createElement('div');
    reviewTitle2.setAttribute('class', 're-t-2 ph15-span');
    let reviewContent1 = document.createElement('div');
    reviewContent1.setAttribute('class', 're-c-1 ph15-span');
    let reviewContent2 = document.createElement('div');
    reviewContent2.setAttribute('class', 're-c-2 ph15-span');
    let reviewContent3 = document.createElement('div');
    reviewContent3.setAttribute('class', 're-c-3 ph15-span');
    let reviewLikes = document.createElement('div');
    reviewLikes.setAttribute('class', 're-l ph15-span');
    let reviewContentDiv = document.createElement('div');
    reviewContentDiv.setAttribute('class', 're-sb');
    let reviewTitle = document.createElement('div');
    reviewTitle.setAttribute('class', 're-t');
    let reviewContent = document.createElement('div');
    reviewContent.setAttribute('class', 're-c');
    reviewTitle.appendChild(reviewTitle1);
    reviewTitle.appendChild(reviewTitle2);
    reviewContent.appendChild(reviewContent1);
    reviewContent.appendChild(reviewContent2);
    reviewContent.appendChild(reviewContent3);
    reviewImgDiv.appendChild(reviewImg);
    reviewContentDiv.appendChild(reviewType);
    reviewContentDiv.appendChild(reviewTitle);
    reviewContentDiv.appendChild(reviewContent);
    reviewContentDiv.appendChild(reviewLikes);
    reviewHref.appendChild(reviewImgDiv);
    reviewHref.appendChild(reviewContentDiv);
    reviewsRanobe.appendChild(reviewHref);
    let titleReviewsHref = document.querySelector('.reviews-ranobe a');
    titleReviewsHref.href = 'reviews'
    elemForRemove.push(reviewHref);

    let collectBlock = document.createElement('div');
    collectBlock.setAttribute('class', 'co-b ph15');
    let collectTitle = document.createElement('div');
    collectTitle.setAttribute('class', 'co-t ph15-span');
    let collectImgDiv = document.createElement('div');
    collectImgDiv.setAttribute('class', 'co-i');
    let collectImg1 = document.createElement('div');
    collectImg1.setAttribute('class', 'co-i-1 ph15-cover');
    let collectImg2 = document.createElement('div');
    collectImg2.setAttribute('class', 'co-i-2 ph15-cover');
    let collectImg3 = document.createElement('div');
    collectImg3.setAttribute('class', 'co-i-3 ph15-cover');
    let collectLikes = document.createElement('div');
    collectLikes.setAttribute('class', 'co-l ph15-span');
    collectImgDiv.appendChild(collectImg1);
    collectImgDiv.appendChild(collectImg2);
    collectImgDiv.appendChild(collectImg3);
    collectBlock.appendChild(collectTitle);
    collectBlock.appendChild(collectImgDiv);
    collectBlock.appendChild(collectLikes);
    collectionsRanobe.appendChild(collectBlock);
    let collTitle = document.querySelector('.collections-ranobe a');
    collTitle.href = 'collections/collections.html';
    elemForRemove.push(collectBlock);
}
for (let i = 0; i < 10; i++) {
    let userHref = document.createElement('div');
    userHref.setAttribute('class', 'us-b ph15');
    let userName = document.createElement('div');
    userName.setAttribute('class', 'us-s-1 ph15-span');
    let userLevel = document.createElement('div');
    userLevel.setAttribute('class', 'us-s-2 ph15-span');
    let userLevelProg = document.createElement('div');
    userLevelProg.setAttribute('class', 'us-l ph15-progress');
    userHref.appendChild(userName);
    userHref.appendChild(userLevel);
    userHref.appendChild(userLevelProg);
    weeklyTopUsers.appendChild(userHref);
    let userTitle = document.querySelector('.weekly-top-users > a');
    userTitle.href = 'users';
    elemForRemove.push(userHref);
}
for (let i = 0; i < 6; i++) {
    let newestBlockDiv = document.createElement('div');
    newestBlockDiv.setAttribute('class', 'nw-b ph15');
    let newestImgDiv = document.createElement('div');
    newestImgDiv.setAttribute('class', 'nw-ib');
    let newestImg = document.createElement('div');
    newestImg.setAttribute('class', 'nw-i ph15-cover');
    let newestTitle = document.createElement('div');
    newestTitle.setAttribute('class', 'nw-t ph15-span');
    let newestCountry = document.createElement('div');
    newestCountry.setAttribute('class', 'nw-c ph15-span');
    let newestTitleCountDiv = document.createElement('div');
    newestTitleCountDiv.setAttribute('class', 'nw-tc');
    newestImgDiv.appendChild(newestImg);
    newestTitleCountDiv.appendChild(newestTitle);
    newestTitleCountDiv.appendChild(newestCountry);
    newestBlockDiv.appendChild(newestImgDiv);
    newestBlockDiv.appendChild(newestTitleCountDiv);
    newestRanobe.appendChild(newestBlockDiv);
    elemForRemove.push(newestBlockDiv);
}
for (let i = 0; i < 3; i++) {
    let dalBlock = document.createElement('div');
    dalBlock.setAttribute('class', 'dl-b ph15');
    let dalImgDiv = document.createElement('div');
    dalImgDiv.setAttribute('class', 'dl-ib');
    let dalImg = document.createElement('div');
    dalImg.setAttribute('class', 'dl-i ph15-cover');
    let dalTitle = document.createElement('div');
    dalTitle.setAttribute('class', 'dl-t ph15-span');
    let dalChp = document.createElement('div');
    dalChp.setAttribute('class', 'dl-ch ph15-span');
    let dalCrtDate = document.createElement('div');
    dalCrtDate.setAttribute('class', 'dl-cr ph15-span');
    let dalTextDiv = document.createElement('div');
    dalTextDiv.setAttribute('class', 'dl-td');
    dalImgDiv.appendChild(dalImg);
    dalTextDiv.appendChild(dalTitle);
    dalTextDiv.appendChild(dalChp);
    dalTextDiv.appendChild(dalCrtDate);
    dalBlock.appendChild(dalImgDiv);
    dalBlock.appendChild(dalTextDiv);
    dalRanobe.appendChild(dalBlock);
    elemForRemove.push(dalBlock);
}

async function ranobeListLoad(){
    let listResponse = await fetch("https://api.lib.social/api/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Opera GX\";v=\"107\", \"Chromium\";v=\"121\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "site-id": "3"
        },
        "referrer": "https://ranobelib.me/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
    });

    for(let removeFreshElem of elemForRemove){
        await removeFreshElem.remove();
    }

    return await listResponse.json();
}

let jsonLoaded = await ranobeListLoad();
console.log(jsonLoaded);

async function dalListLoad(){
    let dalListResponse = await fetch('localserver/projectDAL.json')
    return await dalListResponse.json();
}

let dalJsonLoaded = await dalListLoad();
console.log(dalJsonLoaded);

//Данные из json загружены

// Функция для подсчета количества объектов в массиве
// function jsonLoadedPopularCount(obj){
//     let jsonLPResult = 0;
//     for (let prop in obj){
//         if (obj.hasOwnProperty(prop)){
//             jsonLPResult++;
//         }
//     }
//     return jsonLPResult;
// }

function createTodayTopRanobe(data){
    for (let jsonPopularArrays of data.popular){
        let ongoingHref = document.createElement('a');
        let ongoingImgSpan = document.createElement('div');
        let ongoingImg = document.createElement('img');
        let ongoingSpan = document.createElement('span');
        ongoingHref.href = 'books.html/' + jsonPopularArrays["slug_url"];
        ongoingImg.src = jsonPopularArrays["cover"]["thumbnail"];
        ongoingImg.alt = jsonPopularArrays["cover"]["filename"];
        ongoingSpan.textContent = jsonPopularArrays["rus_name"];
        ongoingImgSpan.appendChild(ongoingImg);
        ongoingHref.appendChild(ongoingImgSpan);
        ongoingHref.appendChild(ongoingSpan);
        ongoingsRanobe.appendChild(ongoingHref);
    }
}
function createFreshUpdRanobe(data) {
    for (let jsonTopArrays of data.latest_updates) {
        let freshDiv = document.createElement('div');
        let freshImgDiv = document.createElement('div');
        let freshImg = document.createElement('img');
        let freshImgHref = document.createElement('a');
        let freshTitle = document.createElement('a');
        let freshMoreChp = document.createElement('a');
        let freshCurrentChp = document.createElement('span');
        let freshLastChpName = document.createElement('span');
        let freshCurrLastChpName = document.createElement('a');
        let freshTimeCreated = document.createElement('p');
        let freshTimeCrDiv = document.createElement('div');
        let freshTitleContentDiv = document.createElement('div');
        freshTitleContentDiv.setAttribute('class', 'fresh-content');
        freshImgHref.href = 'books/books.html/' + jsonTopArrays["slug_url"];
        freshImg.src = jsonTopArrays["cover"]["default"];
        freshImg.alt = jsonTopArrays["cover"]["filename"];
        freshImgHref.appendChild(freshImg);

        if (jsonTopArrays.rus_name === '' || jsonTopArrays.rus_name === null) {
            freshTitle.textContent = jsonTopArrays["name"];
        }
        else {
            freshTitle.textContent = jsonTopArrays["rus_name"];
        }
        let oTDiv = document.createElement('div');
        oTDiv.setAttribute('class', 'fresh-title');
        freshTitle.href = 'books/books.html/' + jsonTopArrays["slug_url"];
        oTDiv.appendChild(freshTitle);

        if (jsonTopArrays.metadata.latest_items.items.length !== 0) {
            freshCurrentChp.textContent = 'Том ' + jsonTopArrays.metadata.latest_items.items['0'].volume +
                ' Глава ' + jsonTopArrays.metadata.latest_items.items['0'].number;
            if (jsonTopArrays.metadata.latest_items.items['0'].name !== '') {
                freshLastChpName.textContent = ' — ' + jsonTopArrays.metadata.latest_items.items['0'].name;
            }
        }
        else {
            freshCurrentChp.textContent = 'Том ?' + ' Глава ?';
        }
        freshCurrLastChpName.appendChild(freshCurrentChp);
        freshCurrLastChpName.appendChild(freshLastChpName);
        let oclcnDiv = document.createElement('div');
        let freshCurrMore = document.createElement('div');
        oclcnDiv.setAttribute('class', 'fresh-current-last-chp');
        if (jsonTopArrays.metadata.latest_items.items.length !== 0) {
            freshCurrLastChpName.href = 'books/read/' + 'v'
                + jsonTopArrays.metadata.latest_items.items['0'].volume + '/chp'
                + jsonTopArrays.metadata.latest_items.items['0'].number;
        }
        else {
            freshCurrLastChpName.href = 'books/' + jsonTopArrays.slug_url + '?section=chapters';
        }
        oclcnDiv.appendChild(freshCurrLastChpName);
        freshCurrMore.appendChild(oclcnDiv);
        freshCurrMore.setAttribute('class', 'fresh-current-more');

        freshTitleContentDiv.appendChild(oTDiv);

        if (jsonTopArrays.metadata.latest_items.count > 1){
            jsonTopArrays.metadata.latest_items.count -= 1;
        let residue10 = jsonTopArrays.metadata.latest_items.count % 10;
        let residue100 = jsonTopArrays.metadata.latest_items.count % 100;
        let oMCDiv = document.createElement('div');
        oMCDiv.setAttribute('class', 'fresh-more-chp');
        freshMoreChp.href = 'books/' + jsonTopArrays.slug_url + '?section=chapters';
            if (residue10 === 1 && residue100 !== 11) {
                freshMoreChp.textContent = ' + ещё ' +
                jsonTopArrays.metadata.latest_items.count + ' глава';
                oMCDiv.appendChild(freshMoreChp);
                freshCurrMore.appendChild(oMCDiv);
                freshTitleContentDiv.appendChild(freshCurrMore);
            }
            if (residue10 >= 2 && residue100 <=4 && (residue100 < 10 || residue100 >= 20)){
                freshMoreChp.textContent = ' + ещё ' +
                jsonTopArrays.metadata.latest_items.count + ' главы';
                oMCDiv.appendChild(freshMoreChp);
                freshCurrMore.appendChild(oMCDiv);
                freshTitleContentDiv.appendChild(freshCurrMore);
            }
            else {
                freshMoreChp.textContent = ' + ещё ' +
                jsonTopArrays.metadata.latest_items.count + ' глав';
                oMCDiv.appendChild(freshMoreChp);
                freshCurrMore.appendChild(oMCDiv);
                freshTitleContentDiv.appendChild(freshCurrMore);
            }
        }

        freshTitleContentDiv.appendChild(freshCurrMore);

        let dateJson = jsonTopArrays.last_item_at;
        let parsedDate = new Date(dateJson);
        let currentDate = new Date();
        let timeDiff = currentDate - parsedDate;
        let minutes = Math.floor(timeDiff / (1000 * 60));
        let residueMin10 = minutes % 10;
        let residueMin100 = minutes % 100;
        let hours = Math.floor(timeDiff / (1000 * 60 * 60));
        let residueHours10 = hours % 10;
        let residueHours100 = hours % 100;
        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let residueDays10 = days % 10;
        let residueDays100 = days % 100;
        let years = Math.floor(days / 365);
        let residueYears10 = years % 10;
        let residueYears100 = years % 100;

        freshTimeCrDiv.setAttribute('class', 'fresh-created-date')

        if (years > 0) {
            if (residueYears10 === 1 && residueYears100 !== 11) {
                freshTimeCreated.textContent = years + ' год назад';
            }
            else if (residueYears10 >= 2 && residueYears10 <=4 && (residueYears100 < 10 || residueYears100 >= 20)){
                freshTimeCreated.textContent = years + ' года назад';
            }
            else {
                freshTimeCreated.textContent = years + ' лет назад';
            }
            freshTimeCrDiv.appendChild(freshTimeCreated);
            freshTitleContentDiv.appendChild(freshTimeCrDiv);
        } else if (days > 0) {
            if (residueDays10 === 1 && residueDays100 !== 11) {
                freshTimeCreated.textContent = days + ' день назад';
            }
            else if (residueDays10 >= 2 && residueDays10 <=4 && (residueDays100 < 10 || residueDays100 >= 20)){
                freshTimeCreated.textContent = days + ' дня назад';
            }
            else {
                freshTimeCreated.textContent = days + ' дней назад';
            }
            freshTimeCrDiv.appendChild(freshTimeCreated);
            freshTitleContentDiv.appendChild(freshTimeCrDiv);
        } else if (hours > 0) {
            if (residueHours10 === 1 && residueHours100 !== 11) {
                freshTimeCreated.textContent = hours + ' час назад';
            }
            else if (residueHours10 >= 2 && residueHours10 <=4 && (residueHours100 < 10 || residueHours100 >= 20)){
                freshTimeCreated.textContent = hours + ' часа назад';
            }
            else {
                freshTimeCreated.textContent = hours + ' часов назад';
            }
            freshTimeCrDiv.appendChild(freshTimeCreated);
            freshTitleContentDiv.appendChild(freshTimeCrDiv);
        } else if (minutes > 0) {
            if (residueMin10 === 1 && residueMin100 !== 11) {
                freshTimeCreated.textContent = minutes + ' минуту назад';
            }
            else if (residueMin10 >= 2 && residueMin10 <= 4 && (residueMin100 < 10 || residueMin100 >= 20)) {
                freshTimeCreated.textContent = minutes + ' минуты назад';
            }
            else {
                freshTimeCreated.textContent = minutes + ' минут назад';
            }
            freshTimeCrDiv.appendChild(freshTimeCreated);
            freshTitleContentDiv.appendChild(freshTimeCrDiv);
        } else {
            freshTimeCreated.textContent = 'Только что';
            freshTimeCrDiv.appendChild(freshTimeCreated);
            freshTitleContentDiv.appendChild(freshTimeCrDiv);
        }

        freshImgDiv.appendChild(freshImgHref);
        freshDiv.appendChild(freshImgDiv);
        freshDiv.appendChild(freshTitleContentDiv);
        freshUpdatesRanobe.appendChild(freshDiv);
    }
}

function createForumThemes(data){
    for (let jsonForumThmArrays of data.forum){
        let themeHref = document.createElement('a');
        let themeViews = document.createElement('p');
        let themeViewsDiv = document.createElement('div');
        themeViewsDiv.setAttribute('class', 'theme-views');
        let themeComments = document.createElement('p');
        let themeCommentsDiv = document.createElement('div');
        themeCommentsDiv.setAttribute('class', 'theme-comments');
        let themeViewsComm = document.createElement('div');
        themeViewsComm.setAttribute('class', 'theme-vc');

        themeViews.textContent = jsonForumThmArrays.views;
        themeComments.textContent = jsonForumThmArrays.answered;
        themeHref.textContent = jsonForumThmArrays.title;
        themeViewsDiv.appendChild(themeViews);
        themeCommentsDiv.appendChild(themeComments);
        themeViewsComm.appendChild(themeViewsDiv);
        themeViewsComm.appendChild(themeCommentsDiv);
        themeHref.appendChild(themeViewsComm);
        themeHref.href = 'forum/discussions/' + jsonForumThmArrays.id;
        forumThemes.appendChild(themeHref);
    }
}

function createReviews(data){
    for (let jsonReviews of data.reviews){
        let reviewHref = document.createElement('a');
        let reviewImg = document.createElement('img');
        let reviewTitle = document.createElement('p');
        let reviewContent = document.createElement('p');
        let reviewType = document.createElement('p');
        let reviewEval = document.createElement('p');
        let reviewTimeCreate = document.createElement('div');
        let reviewLikes = document.createElement('p');
        let reviewDislikes = document.createElement('p');
        let reviewViews = document.createElement('p');

        let reviewTypeAndEvalDiv = document.createElement('div');
        reviewTypeAndEvalDiv.setAttribute('class', 'review-ranobe-type_eval');
        let reviewTitleDiv = document.createElement('div');
        reviewTitleDiv.setAttribute('class', 'review-ranobe-title');
        let reviewContentDiv = document.createElement('div');
        reviewContentDiv.setAttribute('class', 'review-ranobe-content');
        let reviewTimeViewsLikesDiv = document.createElement('div');

        let reviewImgDiv = document.createElement('div');
        reviewImgDiv.setAttribute('class', 'review-ranobe-img');
        let reviewBlockDiv = document.createElement('div');
        reviewBlockDiv.setAttribute('class', 'review-ranobe-block');

        reviewHref.href = 'reviews/' + jsonReviews.id;
        if (jsonReviews.related.background.filename !== null) {
            reviewImg.src = jsonReviews.related.background.url;
            reviewImg.alt = jsonReviews.related.background.filename;
        }
        else {
            reviewImg.src = jsonReviews.related.cover.default;
            reviewImg.alt = jsonReviews.related.cover.filename;
        }

        if (jsonReviews.type.label.toLowerCase() === 'рецензия' && jsonReviews.content.content['0'].content.length <= 2) {
            if (jsonReviews.content.content['0'].content['1'] !== undefined) {
                reviewContent.textContent = jsonReviews.content.content['0'].content['1'].text;
                reviewTitle.textContent = jsonReviews.title;
            }
            else {
                reviewContent.textContent = jsonReviews.content.content['0'].content['0'].text;
                reviewTitle.textContent = jsonReviews.title;
            }
        }
        if (jsonReviews.type.label.toLowerCase() === 'отзыв' && jsonReviews.content.content['0'].content.length <= 2) {
            reviewTitle.textContent = jsonReviews.title;
            reviewContent.textContent = jsonReviews.content.content['0'].content['0'].text;
        }
        if (jsonReviews.content.content['0'].content.length > 2){
            reviewTitle.textContent = jsonReviews.title;
            reviewContent.innerHTML = '';
            let reviewContentArrays = jsonReviews.content.content['0'].content;
            for (let i = 0; i < reviewContentArrays.length; i++){
                if (reviewContentArrays[i].text !== undefined) {
                    reviewContent.innerHTML += reviewContentArrays[i].text + '<br>';
                }
            }
        }

        reviewLikes.textContent = jsonReviews.votes.up;
        reviewLikes.setAttribute('class', 'review-likes');
        reviewDislikes.textContent = jsonReviews.votes.down;
        reviewDislikes.setAttribute('class', 'review-dislike');
        reviewViews.textContent = jsonReviews.views;
        reviewViews.setAttribute('class', 'review-views')

        if (jsonReviews.evaluation.label.trim() === 'Положительный'){
            reviewEval.setAttribute('class', 'review-eval-smile');
        }
        if (jsonReviews.evaluation.label.trim() === 'Отрицательный') {
            reviewEval.setAttribute('class', 'review-eval-sad');
        }

        reviewImgDiv.appendChild(reviewImg);

        reviewTypeAndEvalDiv.appendChild(reviewType);
        reviewTypeAndEvalDiv.appendChild(reviewEval);
        reviewTitleDiv.appendChild(reviewTitle);
        reviewContentDiv.appendChild(reviewContent);
        reviewTimeViewsLikesDiv.appendChild(reviewViews);
        reviewTimeViewsLikesDiv.appendChild(reviewLikes);
        reviewTimeViewsLikesDiv.appendChild(reviewDislikes);
        reviewTimeViewsLikesDiv.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
        reviewTimeViewsLikesDiv.setAttribute('class', 'review-ranobe-time_likes');

        reviewType.textContent = jsonReviews.type.label;
        reviewEval.textContent = jsonReviews.evaluation.label;

        let dateJson = jsonReviews.created_at;
        let parsedDate = new Date(dateJson);
        let currentDate = new Date();
        let timeDiff = currentDate - parsedDate;
        let minutes = Math.floor(timeDiff / (1000 * 60));
        let residueMin10 = minutes % 10;
        let residueMin100 = minutes % 100;
        let hours = Math.floor(timeDiff / (1000 * 60 * 60));
        let residueHours10 = hours % 10;
        let residueHours100 = hours % 100;
        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let residueDays10 = days % 10;
        let residueDays100 = days % 100;
        let years = Math.floor(days / 365);
        let residueYears10 = years % 10;
        let residueYears100 = years % 100;
        let reviewTimeAgoText = document.createElement('p');
        reviewTimeAgoText.setAttribute('class', 'review-time');

        if (years > 0) {
            if (residueYears10 === 1 && residueYears100 !== 11) {
                reviewTimeAgoText.textContent = years + ' год назад';
            }
            else if (residueYears10 >= 2 && residueYears10 <=4 && (residueYears100 < 10 || residueYears100 >= 20)){
                reviewTimeAgoText.textContent = years + ' года назад';
            }
            else {
                reviewTimeAgoText.textContent = years + ' лет назад';
            }
            reviewTimeCreate.appendChild(reviewTimeAgoText);
            reviewTimeViewsLikesDiv.appendChild(reviewTimeCreate)
        } else if (days > 0) {
            if (residueDays10 === 1 && residueDays100 !== 11) {
                reviewTimeAgoText.textContent = days + ' день назад';
            }
            else if (residueDays10 >= 2 && residueDays10 <=4 && (residueDays100 < 10 || residueDays100 >= 20)){
                reviewTimeAgoText.textContent = days + ' дня назад';
            }
            else {
                reviewTimeAgoText.textContent = days + ' дней назад';
            }
            reviewTimeCreate.appendChild(reviewTimeAgoText);
            reviewTimeViewsLikesDiv.appendChild(reviewTimeCreate)
        } else if (hours > 0) {
            if (residueHours10 === 1 && residueHours100 !== 11) {
                reviewTimeAgoText.textContent = hours + ' час назад';
            }
            else if (residueHours10 >= 2 && residueHours10 <=4 && (residueHours100 < 10 || residueHours100 >= 20)){
                reviewTimeAgoText.textContent = hours + ' часа назад';
            }
            else {
                reviewTimeAgoText.textContent = hours + ' часов назад';
            }
            reviewTimeCreate.appendChild(reviewTimeAgoText);
            reviewTimeViewsLikesDiv.appendChild(reviewTimeCreate)
        } else if (minutes > 0) {
            if (residueMin10 === 1 && residueMin100 !== 11) {
                reviewTimeAgoText.textContent = minutes + ' минуту назад';
            }
            else if (residueMin10 >= 2 && residueMin10 <= 4 && (residueMin100 < 10 || residueMin100 >= 20)) {
                reviewTimeAgoText.textContent = minutes + ' минуты назад';
            }
            else {
                reviewTimeAgoText.textContent = minutes + ' минут назад';
            }
            reviewTimeCreate.appendChild(reviewTimeAgoText);
            reviewTimeViewsLikesDiv.appendChild(reviewTimeCreate)
        } else {
            reviewTimeAgoText.textContent = 'Только что';
            reviewTimeCreate.appendChild(reviewTimeAgoText);
            reviewTimeViewsLikesDiv.appendChild(reviewTimeCreate)
        }

        reviewBlockDiv.appendChild(reviewTypeAndEvalDiv);
        reviewBlockDiv.appendChild(reviewTitleDiv);
        reviewBlockDiv.appendChild(reviewContentDiv);
        reviewBlockDiv.appendChild(reviewTimeViewsLikesDiv);

        let reviewRanobeDiv = document.createElement('div');
        reviewHref.href = 'reviews/' + jsonReviews.id
        reviewHref.appendChild(reviewImgDiv);
        reviewHref.appendChild(reviewBlockDiv);
        reviewRanobeDiv.appendChild(reviewHref);

        reviewsRanobe.appendChild(reviewRanobeDiv);
        let titleReviewsHref = document.querySelector('.reviews-ranobe a');
        titleReviewsHref.href = 'reviews'
        }
}

function createCollectionsRanobe(data){
    for (let jsonCollectArrays of data.collections){
        let collectHref = document.createElement('a');
        collectHref.setAttribute('class', 'collection-href');
        let collectImgGrandDiv = document.createElement('div');
        collectImgGrandDiv.setAttribute('class', 'coll-img');
        let collectSpanDiv = document.createElement('div');
        collectSpanDiv.setAttribute('class', 'coll-span');
        let collectSpan = document.createElement('p');
        let collectStarsDiv = document.createElement('div');
        let collectStarsSpan = document.createElement('p');
        collectStarsDiv.setAttribute('class', 'coll-stars');
        let collectViewsDiv = document.createElement('div');
        let collectViewsSpan = document.createElement('p');
        collectViewsDiv.setAttribute('class', 'coll-views');
        let collectFavDiv = document.createElement('div');
        let collectFavSpan = document.createElement('p');
        collectFavDiv.setAttribute('class', 'coll-fav');
        let collectRatingDiv = document.createElement('div');
        collectRatingDiv.setAttribute('class', 'coll-rating');

        collectHref.href = 'collections/collections.html/' + jsonCollectArrays.id;

        collectSpan.textContent = jsonCollectArrays.name;
        collectSpanDiv.appendChild(collectSpan);
        collectHref.appendChild(collectSpanDiv);

        let jsonCollectImgArrays = jsonCollectArrays.previews;
            for (let i = 0; i < jsonCollectImgArrays.length; i++) {
                let collectImgDiv = document.createElement('div');
                let collectImg = document.createElement('img');
                collectImg.src = jsonCollectImgArrays[i].default;
                collectImg.alt = jsonCollectImgArrays[i].filename;
                collectImgDiv.appendChild(collectImg);
                collectImgGrandDiv.appendChild(collectImgDiv)
                collectHref.appendChild(collectImgGrandDiv);
            }

        collectStarsSpan.textContent = jsonCollectArrays.votes.up + ' / ' + jsonCollectArrays.votes.down;
        collectViewsSpan.textContent = jsonCollectArrays.views;
        collectFavSpan.textContent = jsonCollectArrays.favorites_count;

        collectStarsDiv.appendChild(collectStarsSpan);
        collectViewsDiv.appendChild(collectViewsSpan);
        collectFavDiv.appendChild(collectFavSpan);
        collectRatingDiv.appendChild(collectStarsDiv);
        collectRatingDiv.appendChild(collectViewsDiv);
        collectRatingDiv.appendChild(collectFavDiv);

        collectHref.appendChild(collectRatingDiv);

        collectionsRanobe.appendChild(collectHref);

        let collTitle = document.querySelector('.collections-ranobe a');
        collTitle.href = 'collections/collections.html'
    }
}

function createTopUsers(data){
    let userRank = 1;
    for (let topUsersArrays of data.weekly_top_users){
        let userHref = document.createElement('a');
        let userName = document.createElement('p');
        let userLevel = document.createElement('p');
        let userLevelProgressCount = document.createElement('p');
        let userTop = document.createElement('p');
        let userLevelProgress = document.createElement('div');
        let userLevelProgressSub = document.createElement('div');

        let userNameTop = document.createElement('div');
        let userLevelProg = document.createElement('div');

        userTop.textContent = `#${userRank}`;
        userRank++;

        userHref.href = 'users/' + topUsersArrays.id;
        userName.textContent = topUsersArrays.username;
        userLevel.textContent = 'Уровень: ' + topUsersArrays.points_info.level;
        userLevelProgressCount.textContent = topUsersArrays.points_info.current_level_points +
            ' / ' +
            topUsersArrays.points_info.max_level_points;

        userLevelProgress.appendChild(userLevelProgressSub);
        userLevelProgress.setAttribute('class', 'user-level-progress');
        userLevelProgressSub.style.width = topUsersArrays.points_info.point_percent_progress + '%';

        userNameTop.appendChild(userName);
        userNameTop.appendChild(userTop);
        userLevelProg.appendChild(userLevel);
        userLevelProg.appendChild(userLevelProgressCount);

        userHref.appendChild(userNameTop);
        userHref.appendChild(userLevelProg);
        userHref.appendChild(userLevelProgress);

        weeklyTopUsers.appendChild(userHref);

        let userTitle = document.querySelector('.weekly-top-users > a');
        userTitle.href = 'users'
    }
}

function createNewestRanobe(data){
    for (let jsonNewestArrays of data.newest){
        let newestBlockDiv = document.createElement('div');
        let newestBlockHref = document.createElement('a');
        let newestImgDiv = document.createElement('div');
        newestImgDiv.setAttribute('class', 'newest-img-div');
        let newestImg = document.createElement('img');
        let newestTitle = document.createElement('p');
        let newestCountry = document.createElement('p');
        let newestTitleCountDiv = document.createElement('div')
        newestTitleCountDiv.setAttribute('class', 'newest-title-country');

        newestBlockHref.href = 'newest/newest.html/' + jsonNewestArrays.slug_url;
        newestImg.src = jsonNewestArrays.cover.default;
        newestImg.alt = jsonNewestArrays.cover.filename;
        newestImgDiv.appendChild(newestImg);
        newestTitle.textContent = jsonNewestArrays.rus_name
        if (jsonNewestArrays.rus_name === '' || jsonNewestArrays.rus_name === null) {
            newestTitle.textContent = jsonNewestArrays.name;
        }
        newestCountry.textContent = jsonNewestArrays.type.label;
        newestTitleCountDiv.appendChild(newestTitle);
        newestTitleCountDiv.appendChild(newestCountry);
        newestBlockHref.appendChild(newestImgDiv);
        newestBlockHref.appendChild(newestTitleCountDiv);
        newestBlockDiv.appendChild(newestBlockHref);

        newestRanobe.appendChild(newestBlockDiv);
    }
}

function createDALRanobe(data){
    for (let jsonDALArrays of data.dateAlife){
        let dalHref = document.createElement('a');
        let dalImgSpan = document.createElement('span');
        let dalImg = document.createElement('img');
        let dalSpan = document.createElement('span');
        dalHref.href = 'books.html/' + jsonDALArrays["slug_url"];
        dalImg.src = jsonDALArrays["cover"]["default"];
        dalImg.alt = jsonDALArrays["cover"]["filename"];
        dalSpan.textContent = jsonDALArrays["rus_name"];
        dalImgSpan.appendChild(dalImg);
        dalHref.appendChild(dalImgSpan);
        dalHref.appendChild(dalSpan);
        dalRanobe.appendChild(dalHref);
    }
}

createFreshUpdRanobe(jsonLoaded.data);
createTodayTopRanobe(jsonLoaded.data);
createDALRanobe(dalJsonLoaded.data);
createForumThemes(jsonLoaded.data);
createReviews(jsonLoaded.data);
createCollectionsRanobe(jsonLoaded.data);
createTopUsers(jsonLoaded.data);
createNewestRanobe(jsonLoaded.data);

let btnLoadMoreFreshRanobe = document.createElement('button');
btnLoadMoreFreshRanobe.setAttribute('class', 'load-more-fresh');
btnLoadMoreFreshRanobe.textContent = 'Загрузить ещё';
freshUpdatesRanobe.appendChild(btnLoadMoreFreshRanobe);

let jsonPageNum = 2;

btnLoadMoreFreshRanobe.addEventListener('click', async function () {
    async function loadMoreFresh() {
        btnLoadMoreFreshRanobe.disabled = true;
        let jsonMoreFresh = await fetch("https://api.lib.social/api/latest-updates?page=" + jsonPageNum, {
            "headers": {
                "accept": "*/*",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Opera GX\";v=\"107\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "site-id": "3"
            },
            "referrer": "https://ranobelib.me/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        });
        jsonPageNum++;
        return await jsonMoreFresh.json();
    }


    let jsonMoreListLoaded = await loadMoreFresh();
    loadMoreFreshRanobe(jsonMoreListLoaded);
    console.log(jsonMoreListLoaded);
})
function loadMoreFreshRanobe(data){
    for (let jsonUpdFreshArrays of data.data) {
        let ongoingDiv = document.createElement('div');
        let ongoingImgDiv = document.createElement('div');
        let ongoingImg = document.createElement('img');
        let freshImgHref = document.createElement('a');
        let ongoingTitle = document.createElement('a');
        let ongoingMoreChp = document.createElement('a');
        let ongoingCurrentChp = document.createElement('span');
        let ongoingLastChpName = document.createElement('span');
        let ongoingCurrLastChpName = document.createElement('a');
        let freshTimeCreated = document.createElement('p');
        let freshTimeCrDiv = document.createElement('div');
        let ongoingTitleContentDiv = document.createElement('div');
        ongoingTitleContentDiv.setAttribute('class', 'fresh-content');
        freshImgHref.href = 'books/books.html/' + jsonUpdFreshArrays["slug_url"];
        ongoingImg.src = jsonUpdFreshArrays["cover"]["default"];
        ongoingImg.alt = jsonUpdFreshArrays["cover"]["filename"];
        freshImgHref.appendChild(ongoingImg);

        if (jsonUpdFreshArrays.rus_name === '' || jsonUpdFreshArrays.rus_name === null) {
            ongoingTitle.textContent = jsonUpdFreshArrays["name"];
        }
        else {
            ongoingTitle.textContent = jsonUpdFreshArrays["rus_name"];
        }
        let oTDiv = document.createElement('div');
        oTDiv.setAttribute('class', 'fresh-title');
        ongoingTitle.href = 'books/books.html/' + jsonUpdFreshArrays["slug_url"];
        oTDiv.appendChild(ongoingTitle);

        ongoingCurrentChp.textContent = 'Том ' + jsonUpdFreshArrays.metadata.latest_items.items['0'].volume +
            ' Глава ' + jsonUpdFreshArrays.metadata.latest_items.items['0'].number;
        if (jsonUpdFreshArrays.metadata.latest_items.items['0'].name !== '') {
            ongoingLastChpName.textContent = ' — ' + jsonUpdFreshArrays.metadata.latest_items.items['0'].name;
        }
        ongoingCurrLastChpName.appendChild(ongoingCurrentChp);
        ongoingCurrLastChpName.appendChild(ongoingLastChpName);
        let oclcnDiv = document.createElement('div');
        let freshCurrMore = document.createElement('div');
        oclcnDiv.setAttribute('class', 'fresh-current-last-chp');
        ongoingCurrLastChpName.href = 'books/read/' + 'v'
            + jsonUpdFreshArrays.metadata.latest_items.items['0'].volume + '/chp'
            + jsonUpdFreshArrays.metadata.latest_items.items['0'].number;
        oclcnDiv.appendChild(ongoingCurrLastChpName);
        freshCurrMore.appendChild(oclcnDiv);
        freshCurrMore.setAttribute('class', 'fresh-current-more');

        ongoingTitleContentDiv.appendChild(oTDiv);

        if (jsonUpdFreshArrays.metadata.latest_items.count > 1){
            jsonUpdFreshArrays.metadata.latest_items.count -= 1;
            let residue10 = jsonUpdFreshArrays.metadata.latest_items.count % 10;
            let residue100 = jsonUpdFreshArrays.metadata.latest_items.count % 100;
            let oMCDiv = document.createElement('div');
            oMCDiv.setAttribute('class', 'fresh-more-chp');
            ongoingMoreChp.href = 'books/' + jsonUpdFreshArrays.slug_url + '?section=chapters';
            if (residue10 === 1 && residue100 !== 11) {
                ongoingMoreChp.textContent = ' + ещё ' +
                    jsonUpdFreshArrays.metadata.latest_items.count + ' глава';
                oMCDiv.appendChild(ongoingMoreChp);
                freshCurrMore.appendChild(oMCDiv);
                ongoingTitleContentDiv.appendChild(freshCurrMore);
            }
            if (residue10 >= 2 && residue100 <=4 && (residue100 < 10 || residue100 >= 20)){
                ongoingMoreChp.textContent = ' + ещё ' +
                    jsonUpdFreshArrays.metadata.latest_items.count + ' главы';
                oMCDiv.appendChild(ongoingMoreChp);
                freshCurrMore.appendChild(oMCDiv);
                ongoingTitleContentDiv.appendChild(freshCurrMore);
            }
            else {
                ongoingMoreChp.textContent = ' + ещё ' +
                    jsonUpdFreshArrays.metadata.latest_items.count + ' глав';
                oMCDiv.appendChild(ongoingMoreChp);
                freshCurrMore.appendChild(oMCDiv);
                ongoingTitleContentDiv.appendChild(freshCurrMore);
            }
        }

        ongoingTitleContentDiv.appendChild(freshCurrMore);

        let dateJson = jsonUpdFreshArrays.last_item_at;
        let parsedDate = new Date(dateJson);
        let currentDate = new Date();
        let timeDiff = currentDate - parsedDate;
        let minutes = Math.floor(timeDiff / (1000 * 60));
        let residueMin10 = minutes % 10;
        let residueMin100 = minutes % 100;
        let hours = Math.floor(timeDiff / (1000 * 60 * 60));
        let residueHours10 = hours % 10;
        let residueHours100 = hours % 100;
        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let residueDays10 = days % 10;
        let residueDays100 = days % 100;
        let years = Math.floor(days / 365);
        let residueYears10 = years % 10;
        let residueYears100 = years % 100;

        freshTimeCrDiv.setAttribute('class', 'fresh-created-date')

        if (years > 0) {
            if (residueYears10 === 1 && residueYears100 !== 11) {
                freshTimeCreated.textContent = years + ' год назад';
            }
            else if (residueYears10 >= 2 && residueYears10 <=4 && (residueYears100 < 10 || residueYears100 >= 20)){
                freshTimeCreated.textContent = years + ' года назад';
            }
            else {
                freshTimeCreated.textContent = years + ' лет назад';
            }
            freshTimeCrDiv.appendChild(freshTimeCreated);
            ongoingTitleContentDiv.appendChild(freshTimeCrDiv);
        } else if (days > 0) {
            if (residueDays10 === 1 && residueDays100 !== 11) {
                freshTimeCreated.textContent = days + ' день назад';
            }
            else if (residueDays10 >= 2 && residueDays10 <=4 && (residueDays100 < 10 || residueDays100 >= 20)){
                freshTimeCreated.textContent = days + ' дня назад';
            }
            else {
                freshTimeCreated.textContent = days + ' дней назад';
            }
            freshTimeCrDiv.appendChild(freshTimeCreated);
            ongoingTitleContentDiv.appendChild(freshTimeCrDiv);
        } else if (hours > 0) {
            if (residueHours10 === 1 && residueHours100 !== 11) {
                freshTimeCreated.textContent = hours + ' час назад';
            }
            else if (residueHours10 >= 2 && residueHours10 <=4 && (residueHours100 < 10 || residueHours100 >= 20)){
                freshTimeCreated.textContent = hours + ' часа назад';
            }
            else {
                freshTimeCreated.textContent = hours + ' часов назад';
            }
            freshTimeCrDiv.appendChild(freshTimeCreated);
            ongoingTitleContentDiv.appendChild(freshTimeCrDiv);
        } else if (minutes > 0) {
            if (residueMin10 === 1 && residueMin100 !== 11) {
                freshTimeCreated.textContent = minutes + ' минуту назад';
            }
            else if (residueMin10 >= 2 && residueMin10 <= 4 && (residueMin100 < 10 || residueMin100 >= 20)) {
                freshTimeCreated.textContent = minutes + ' минуты назад';
            }
            else {
                freshTimeCreated.textContent = minutes + ' минут назад';
            }
            freshTimeCrDiv.appendChild(freshTimeCreated);
            ongoingTitleContentDiv.appendChild(freshTimeCrDiv);
        } else {
            freshTimeCreated.textContent = 'Только что';
            freshTimeCrDiv.appendChild(freshTimeCreated);
            ongoingTitleContentDiv.appendChild(freshTimeCrDiv);
        }

        ongoingImgDiv.appendChild(freshImgHref);
        ongoingDiv.appendChild(ongoingImgDiv);
        ongoingDiv.appendChild(ongoingTitleContentDiv);
        freshUpdatesRanobe.appendChild(ongoingDiv);
    }
    if (jsonPageNum !== 10) {
        freshUpdatesRanobe.appendChild(btnLoadMoreFreshRanobe);
        btnLoadMoreFreshRanobe.disabled = false;
    }
    else {freshUpdatesRanobe.removeChild(btnLoadMoreFreshRanobe)}
}


//Начало кода с горизонтальной прокруткой колесом мыши (код не мой)

    function scrollHorizontally(e) {

        let scrollPos = this.scrollLeft;  // Сколько прокручено по горизонтали, до прокрутки (не перемещать эту строку!)

        // Горизонтальная прокрутка
        e = ongoingsRanobe.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        this.scrollLeft -= (delta*520); // Multiplied by 10

        let widthElem = this.scrollWidth; // Ширина всего элемента
        let widthBrowser = document.documentElement.clientWidth;  // Ширина окна минус размер вертикального скролла


        // Прокрутка вверх, но элемент уже в крайней левой позиции, то двигаемся вверх
        if ((delta === 1 ) && (this.scrollLeft === 0)) return;
        // Прокрутка вниз, но элемент виден полностью. Или элемент до конца прокручен в правый край
        if ((widthBrowser >= widthElem) || (scrollPos === this.scrollLeft)) return;

        e.preventDefault(); // запрещает прокрутку по вертикали

    }

    let elems = document.querySelectorAll('.ongoings');
    for (let a = 0; a < elems.length; a++) {
        elems[a].addEventListener("mousewheel", scrollHorizontally, false);     // IE9, Chrome, Safari, Opera
        elems[a].addEventListener("DOMMouseScroll", scrollHorizontally, false); // Firefox
    }

//Конец кода с горизонтальной прокруткой колесом мыши (код не мой)

