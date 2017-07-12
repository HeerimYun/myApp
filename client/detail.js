Template.detail.helpers({
    data: function () {
/*        console.log(Router.current().params._id);*/
        
        var board = CollectionBoard.findOne({_id:Router.current().params._id});
        //console.log(board); //찍어보기위함
        return board;
    }
});