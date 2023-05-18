let botton = document.getElementById('botton');

let age2_release = 'no'

function Kaup(age, age2, height, weight) {
    function Kaup_results(kaup, normal_weight, normal_top, normal_bottom) {
        if (normal_top <kaup) {
            return "あなたは「太りぎみ」です。少しダイエットしましょう。\nあなたの肥満度は、カウプ指数で約「" + kaup + "」でした。適正体重は" + normal_weight + "kgです。"
        } else if (normal_bottom >kaup) {
            return "あなたは「痩せぎみ」です。もう少したくさん食べましょう。\nあなたの肥満度は、カウプ指数で約「" + kaup + "」でした。適正体重は" + normal_weight + "kgです。"
        } else {
            return "あなたは「標準体型」です。素晴らしい！そのまま維持しましょう。\nあなたの肥満度は、カウプ指数で約「" + kaup + "」でした。適正体重は" + normal_weight + "kgです。"
        }
    }
    let kaup = weight / (height * height)
    kaup = kaup * 100;
    kaup = Math.round(kaup);
    kaup = kaup / 100;
    if (age === 0) {
        let normal_top = 18;
        let normal_weight = 17 * (height * height);
        normal_weight = normal_weight * 100;
        normal_weight = Math.round(normal_weight)
        normal_weight = normal_weight / 100;
        let normal_bottom = 16;
        let Kaup_result = Kaup_results(kaup, normal_weight, normal_top, normal_bottom);
        return Kaup_result;
    } else if (age === 1 && age2 <= 6) {
        let normal_top = 17.5;
        let normal_weight = 16.5 * (height * height);
        normal_weight = normal_weight * 100;
        normal_weight = Math.round(normal_weight)
        normal_weight = normal_weight / 100;
        let normal_bottom = 15.5;
        let Kaup_result = Kaup_results(kaup, normal_weight, normal_top, normal_bottom);
        return Kaup_result;
    } else if (age === 1 && age2 >= 6) {
        let normal_top = 17;
        let normal_weight = 16 * (height * height);
        normal_weight = normal_weight * 100;
        normal_weight = Math.round(normal_weight)
        normal_weight = normal_weight / 100;
        let normal_bottom = 15;
        let Kaup_result = Kaup_results(kaup, normal_weight, normal_top, normal_bottom);
        return Kaup_result;
    } else if (age === 2) {
        let normal_top = 17;
        let normal_weight = 16 * (height * height);
        normal_weight = normal_weight * 100;
        normal_weight = Math.round(normal_weight)
        normal_weight = normal_weight / 100;
        let normal_bottom = 15;
        let Kaup_result = Kaup_results(kaup, normal_weight, normal_top, normal_bottom);
        return Kaup_result;
    } else {
        let normal_top = 16.5
        let normal_weight = 15 * (height * height);
        normal_weight = normal_weight * 100;
        normal_weight = Math.round(normal_weight)
        normal_weight = normal_weight / 100;
        let normal_bottom = 14.5
        let Kaup_result = Kaup_results(kaup, normal_weight, normal_top, normal_bottom);
        return Kaup_result;
    }
}

function Laurel(height, weight) {
    let laurel = weight / (height * height * height) * 10
    laurel = laurel * 100;
    laurel = Math.round(laurel)
    laurel = laurel / 100;
    let normal_weight = 130 / 10 * (height * height * height)
    normal_weight = normal_weight * 100;
    normal_weight = Math.round(normal_weight)
    normal_weight = normal_weight / 100;
    if (laurel < 100) {
        return "あなたは「痩せすぎ」です。カロリーをたくさん取りましょう。\nあなたの肥満度は、ローレル指数で約「" + laurel + "」でした。適正体重は" + normal_weight + "kgです。"
    } else if (laurel < 115) {
        return "あなたは「痩せぎみ」です。もう少したくさん食べましょう。\nあなたの肥満度は、ローレル指数で約「" + laurel + "」でした。適正体重は" + normal_weight + "kgです。"
    } else if (laurel < 145) {
        return "あなたは「標準体型」です。素晴らしい！そのまま維持しましょう。\nあなたの肥満度は、ローレル指数で約「" + laurel + "」でした。適正体重は" + normal_weight + "kgです。"
    } else if (laurel < 160) {
        return "あなたは「太りぎみ」です。少しダイエットしましょう。\nあなたの肥満度は、ローレル指数で約「" + laurel + "」でした。適正体重は" + normal_weight + "kgです。"
    } else {
        return "あなたは「太りすぎ」です。ダイエットしましょう。\nあなたの肥満度は、ローレル指数で約「" + laurel + "」でした。適正体重は" + normal_weight + "kgです。"
    }
}

function Bmi(height, weight) {
    let bmi = weight / (height * height)
    bmi = bmi * 100;
    bmi = Math.round(bmi)
    bmi = bmi / 100;
    let normal_weight = (height * height) * 22
    normal_weight = normal_weight * 100;
    normal_weight = Math.round(normal_weight)
    normal_weight = normal_weight / 100;
    if (bmi < 16) {
        return "あなたは「痩せすぎ」(重度の痩せ)です。カロリーをたくさん取りましょう。\nあなたの肥満度は、ボディマス指数で約「" + bmi + "」でした。適正体重は" + normal_weight + "kgです。"
    } else if (bmi < 17) {
        return "あなたは「痩せている」(中度の痩せ)です。カロリーを取りましょう。\nあなたの肥満度は、ボディマス指数で約「" + bmi + "」でした。適正体重は" + normal_weight + "kgです。"
    } else if (bmi < 18.5) {
        return "あなたは「痩せ気味」(軽度の痩せ)です。もう少したくさん食べましょう。\nあなたの肥満度は、ボディマス指数で約「" + bmi + "」でした。適正体重は" + normal_weight + "kgです。"
    } else if (bmi < 25) {
        return "あなたは「標準体型」です。素晴らしい！そのまま維持しましょう。\nあなたの肥満度は、ボディマス指数で約「" + bmi + "」でした。適正体重は" + normal_weight + "kgです。"
    } else if (bmi < 30) {
        return "あなたは「太り気味」(前肥満)です。もう少しだけ痩せましょう。\nあなたの肥満度は、ボディマス指数で約「" + bmi + "」でした。適正体重は" + normal_weight + "kgです。"
    } else if (bmi < 35) {
        return "あなたは「太っている」(肥満度１)です。少しダイエットしましょう。\nあなたの肥満度は、ボディマス指数で約「" + bmi + "」でした。適正体重は" + normal_weight + "kgです。"
    } else if (bmi < 40) {
        return "あなたは「かなり太っている」(肥満度２)です。ダイエットしましょう。\nあなたの肥満度は、ボディマス指数で約「" + bmi + "」でした。適正体重は" + normal_weight + "kgです。"
    } else {
        return "あなたは「非常に太っている」(肥満度３)です。しっかりダイエットしましょう。\nあなたの肥満度は、ボディマス指数で約「" + bmi + "」でした。適正体重は" + normal_weight + "kgです。"
    }
}

window.addEventListener('DOMContentLoaded', function() {
    let age_inside_display = document.getElementById("age_inside");
    let age2 = document.getElementById("age2");
    age_inside_display.addEventListener("change", function() {
        let age_number = age_inside_display.value - 0
        if (age_number <= 1) {
            console.log(age_number);
            age2.style.display = 'block';
            age2_release = 'yes';
        } else if (age_number === 0) {
            age2.style.display = 'block';
            age2_release = 'yes';
        } else {
            age2.style.display = 'none';
            age2_release = 'no';
        }
    });
});

botton.addEventListener('click', function() {
    let age_inside = document.getElementById('age_inside');
    let age2_inside = document.getElementById('age2_inside');
    let height_inside = document.getElementById('height_inside');
    let weight_inside = document.getElementById('weight_inside');
    let numbers = document.getElementById('numbers');
    let infant = document.getElementById('infant');
    let age = age_inside.value - 0;
    let age2 = age2_inside.value - 0;
    let height = height_inside.value - 0;
    let weight = weight_inside.value - 0;
    height = height / 100;
    if (age_inside.value == '' || isNaN(age)) {
        numbers.style.color = '#ff0000';
        infant.style.color = '#000000';
        return;
    }
    if (age2_inside.value == '' && age2_release == 'yes') {
        numbers.style.color = '#ff0000';
        infant.style.color = '#000000';
        return;
    }
    if (isNaN(age2) && age2_release == 'yes') {
        numbers.style.color = '#ff0000';
        infant.style.color = '#000000';
        return;
    }
    if (age2 < 3 && age2_release == 'yes') {
        infant.style.color = '#ff0000';
        numbers.style.color = '#000000';
        return;
    }
    if (height_inside.value == '' || isNaN(age)) {
        numbers.style.color = '#ff0000';
        infant.style.color = '#000000';
        return;
    }
    if (weight_inside.value == '' || isNaN(age)) {
        numbers.style.color = '#ff0000';
        infant.style.color = '#000000';
        return;
    }
    if (age <= 5 || age === 0) {
        let kaup = Kaup(age, age2, height, weight);
        alert(kaup);
    } else if (age >= 6 && age <= 15) {
        let laurel = Laurel(height, weight)
        alert(laurel)
    } else {
        let bmi = Bmi(height, weight)
        alert(bmi)
    }
});