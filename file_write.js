var fs = require('fs');

var data = 'My first data...\r\nhello world!';

// 비동기 방식으로 파일을 생성, 함수의 인자는
// 앞에서 부터 순서대로 파일명, 입력데이터, 인코딩, callback 함수
fs.writeFile('file01_async.txt', data, 'utf-8', function(e){
  if(e)
  {
    // error
    console.log(e);
  }else {
    console.log('01 Write done!');
  }
});

// 동기 방식은 callback 함수가 없어서 try-catch
try
{
  // 동기 방식으로 파일을 생헝 인자는 (파일명, 데이터, 인코딩)
  fs.writeFileSync('file02_sysc.txt', data, 'utf-8');
  console.log('02 Write done!');
}catch(e)
{
  console.log(e);
}
