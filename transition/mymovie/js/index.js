$(document).ready(() => {
    $.ajax({
        url: "https://www.easy-mock.com/mock/5d2ed7ca7f168b5e40d35f47/movie/mymovie-learn",
        type: 'GET',
        success: function (data) {
            console.log(data);

            $('#moviePic').attr('src', data.data.moviePic)
            $('.score-num span').html(data.data.people)
            $('#movieName').html(data.data.name)
            $('.movie-ename span').html(data.data.nameEnglish)
            $('.rating span').html(data.data.grade)
            star(data.data.star)
            $('.movie-type').html(data.data.type)
            $('.address').html(data.data.address)
            $('.time').html(data.data.time)
            $('.date').html(data.data.date)
            $('.text-expander__content p').html(data.data.desc)
            celebrity(data.data.person)
            booking(data.data.booking)
        }
    })

    function star(starnum) {
        let num = Math.floor(starnum);
        let white = Math.floor(5 - starnum)
        while (white--) {
            $('#rating').prepend('<img class="img" src="./images/star2.png"></img>')
        }

        if (starnum > num) {
            $('#rating').prepend('<img class="img" src="./images/star-h.png"></img>')
        }
        while (num--) {
            $('#rating').prepend('<img class="img" src="./images/star.png"></img>')
        }
    }
})
$('#movie-watch').on('click', function () {
    let t = null
    clearTimeout(t)
    if ($(this).hasClass('show')) {
        $('#toast').removeClass('active')
        $('.weui-toast__content').html('已取消')
        $(this).removeClass('show')
        $('#movie-watch img').attr('src', './images/heart.png')
    } else {
        $('#toast').removeClass('active')
        $('.weui-toast__content').html('已标记为想看')
        $(this).addClass('show')
        $('#movie-watch img').attr('src', './images/heart1.png')
    }
    $('#toast').addClass('active')
    t = setTimeout(() => {
        $('#toast').removeClass('active')
    }, 2000)
})
$('#text-expander').on('click', () => {
    if ($('.icon-chevron_down').hasClass('up')) {
        $('.icon-chevron_down').removeClass('up')
        // $('.text-expander__content').removeClass('open')
        $('.text-expander__content').addClass('close')
    } else {
        $('.text-expander__content').removeClass('close')
        // $('.text-expander__content').addClass('open')
        $('.icon-chevron_down').addClass('up')
    }
})

function celebrity(data) {
    for (let n of data) {
        $('.movie-celebrities').append(
            `
            <li>
                <a href="javascript:;" class="link">
                    <div class="movie-celebrities__pic">
                        <img src="${n.avatal}" alt="">
                    </div>
                    <span class="movie-celebrities-nick">${n.name}</span>
                    <span class="movie-celebrities-roles">${n.sort}</span>
                </a>
            </li>
            `
        )
    }
}

function booking(data) {
    $('.ranking').html(data.ranking)
    $('.bookingWeek').html(data.bookingWeek)
    $('.bookingTotal').html(data.bookingTotal)
}