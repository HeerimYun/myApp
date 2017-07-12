

Template.board.events({
    'click [name=submit]': function () { //글쓰기 버튼
        //console.log(document.getElementsByName('title')[0].value) //java script 이용
        
        //jQuery 이용하여 작성한 글의 각 속성 값 가져오기
/*        console.log($('[name=title]').val())
        console.log($('[name=number]').val())
        console.log($('[name=writer]').val())
        console.log($('[name=content]').val())*/
        var title = $('[name=title]').val();
        var number = $('[name=number]').val();
        var writer = $('[name=writer]').val();
        var content = $('[name=content]').val();
        
        var obj = {
            '글번호': number,
            '제목': title,
            '작성자': writer,
            '내용': content
        }

        //분기점
        if ($('[name=hidden_id]').val().length <= 0) { //글쓰기
            //콜렉션에 삽입
            CollectionBoard.insert(obj);
            
            //비우기
            $('[name=title]').val('');
            $('[name=number]').val('');
            $('[name=writer]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');
            
        } else { //수정
            
            CollectionBoard.update($('[name=hidden_id]').val(), {$set: obj});
            $('[name=title]').val('');
            $('[name=number]').val('');
            $('[name=writer]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');
        }
        
        
        
        
        
    },
    
    //삭제 기능
    'click [name=deleteBoard]': function (element, templet) { //이벤트 함수: 파라미터는 이벤트시의 엘리먼트(클릭된대상)와 템플릿
        //DB 지우는 것
        console.log('삭제버튼 눌림'); //확인용
        console.log($(element.target).attr('id'));
        var id = $(element.target).attr('id'); //이벤트시 눌린 요소의 id(애트리뷰트) 가져옴
        //var id = this._id;
        
        CollectionBoard.remove({_id:id});
        
    },
    
    //수정 기능
    'click [name=updateBoard]': function (element, templet) {
        console.log('수정버튼 눌림'); //동작여부 확인용
        //1.수정 모달 띄우기
        $('#writeModal').modal('show');
        //2. 모달 인풋창에 기존 데이터 불러오기
/*        console.log(this._id);
        console.log(this.글번호);
        console.log(this._작성자);
        console.log(this.제목);
        console.log(this.내용);*/
        
        $('[name=hidden_id]').val(this._id);
        $('[name=title]').val(this.제목);
        $('[name=number]').val(this.글번호);
        $('[name=writer]').val(this.작성자);
        $('[name=content]').val(this.내용);
        
    }
});

Template.board.helpers({
    list: function () {
        
        var result = CollectionBoard.find().fetch();
/*        var result = [
            {
                '글번호': 1,
                '제목': "제목11111111111111111111",
                '작성자': "관리자",
                '조회수': "99"
            },
            {
                '글번호': 2,
                '제목': "제목222222222222222",
                '작성자': "관리자",
                '조회수': "99"
            },
            {
                '글번호': 3,
                '제목': "제목33333333333333333",
                '작성자': "관리자",
                '조회수': "99"
            },
            {
                '글번호': 4,
                '제목': "제목4444444444",
                '작성자': "관리자",
                '조회수': "99"
            }
        ]*/
        return result;
    }
});