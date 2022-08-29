/**
 * Todo Modeling
 * @typedef {Object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} status - 완료 여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/**
 * CREATE
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @param {Todo} todo -
 */
function create(todo) {}

/**
 * READ ALL
 * 모든 할 일을 조회할 수 있다.
 * @return {Todo[]}
 */
function readAll() {}

/**
 * READ BY ID
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number} id - 아이디
 * @return {Todo}
 */
function readById(id) {}

/**
 * UPDATE
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {Todo} todo
 */

function update(todo) {}

/**
 * DELETE ALL
 * 모든 할 일을 제거할 수 있다.
 */
function deleteAll() {}

/**
 * DELETE BY ID
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {number} id
 */
function deleteById(id) {}

/**
 * DELETE TAG BY ID
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} id
 * @param {string} tag
 */
function deleteTagById(id, tag) {}

/**
 * DELETE ALL TAGS BY ID
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} id
 */
function deleteTagsById(id) {}
