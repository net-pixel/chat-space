function buildHTML(message){
  // 「もしメッセージに画像が含まれていたら」という条件式
  if (message.image) {
    var html =
      `<div class="message">
        <div class="message__upper-info">
          <p class="message__upper-info--talker">
            ${message.user_name}
          </p>
          <p class="message__upper-info--date">
            ${message.created_at}
          </p>
        </div>
        <p class="message__text">
          ${message.content}
        </p>
        <p class="message__lower-info--image">
          <img src=${message.image}>
        </p>
      </div>`
  } else {
    var html =
      `<div class="message">
        <div class="message__upper-info">
          <p class="message__upper-info--talker">
            ${message.user_name}
          </p>
          <p class="message__upper-info--date">
            ${message.created_at}
          </p>
        </div>
        <p class="message__text">
          ${message.content}
        </p>
      </div>`
  }
  return html
}
$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url:  url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData:  false,
      contentType:  false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function(data){
      alert("メッセージ送信に失敗しました")
    })
    .always(function(){
      $(".submit-btn").prop('disabled', false);　//ここで解除している
    })
  })
});