angular.module('Eggly', [

])
.controller('MainCtrl', function($scope) {
  $scope.categories = [
    {id: 0, name: 'development'},
    {id: 1, name: 'design'},
    {id: 2, name: 'Exercise'},
    {id: 3, name: 'Humor'}
  ];

  $scope.bookmarks = [
    {id: 0, title: 'Angular', category: 'development', url: 'Angular.com'},
    {id: 1, title: 'AngularJS', category: 'design', url: 'react1.com'},
    {id: 2, title: 'React', category: 'Exercise', url: 'react2.com'},
    {id: 3, title: 'React2', category: 'Exercise', url: 'react2.com'},
    {id: 4, title: 'Humor', category: 'Humor', url: 'react3.com'}
  ];

  $scope.currentCategory = null;

  function setCurrentCategory(category) {
    $scope.currentCategory = category;
    resetState();
  }

  function isCurrentCategory(category) {
    return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
  }

  $scope.setCurrentCategory = setCurrentCategory;
  $scope.isCurrentCategory = isCurrentCategory;

  $scope.isCreating = false;
  $scope.isEditing = false;

  function startCreating() {
    $scope.isCreating = true;
    $scope.isEditing = false;
  }

  function cancelCreating() {
    $scope.isCreating = false;
  }

  function startEditing() {
    $scope.isEditing = true;
    $scope.isCreating = false;
  }

  function cancelEditing() {
    $scope.isEditing = false;
  }

  function resetState() {
    $scope.isEditing = false;
    $scope.isCreating = false;
  }

  $scope.startCreating = startCreating;
  $scope.cancelCreating = cancelCreating;
  $scope.startEditing = startEditing;
  $scope.cancelEditing = cancelEditing;

  function resetForm(bookmark) {
    bookmark.title = '';
    bookmark.url = '';
  }

  function createNewBookmark(bookmark) {
    var newBookmark = {
      id: Date.now(),
      category: $scope.currentCategory.name,
      url: bookmark.url,
      title: bookmark.title
    }
    $scope.bookmarks.push(newBookmark);
    resetForm(bookmark);
  }
  $scope.createNewBookmark = createNewBookmark;
  
  $scope.editingBookmark = null;
  function setEditingBookmark(bookmark) {
    $scope.editingBookmark = angular.copy(bookmark);
  }

  function updateBookmark(bookmark) {
      var index = _.findIndex($scope.bookmarks, function(b) {
        return b.id == bookmark.id;
      });
      $scope.bookmarks[index] = bookmark;
      $scope.editedBookmark = null;
      $scope.isEditing = false;
  }
  $scope.updateBookmark = updateBookmark;
  $scope.setEditingBookmark = setEditingBookmark;
})
;
