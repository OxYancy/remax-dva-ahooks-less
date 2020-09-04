import React from 'react'
import { View, Text, Image } from 'remax/one'
import { connect } from 'remax-dva'
import { useRequest } from 'ahooks'
import { Button } from 'anna-remax-ui'
import Icon from 'remax-iconfont-component'
import { request } from '../../utils/http'
import './index.less'
export const IndexPage = ({ todos, dispatch }) => {
  const { data, error, loading } = useRequest(() =>
    request('http://www.httpbin.org/get'),
  )
  const handleToggle = (todo) => (e) => {
    dispatch({
      type: 'todo/toggle',
      id: todo.id,
    })
  }
  console.log('todos', todos, data)
  if (error) {
    return <div>failed to load</div>
  }
  if (loading) {
    return <div>loading...</div>
  }
  return (
    <View className="app">
      {todos.map((todo, index) => (
        <View className="name" key={todo.id}>
          {todo.text}---{todo.completed ? '已完成' : '未完成'}
          {!todo.completed && (
            <Button onClick={handleToggle(todos[index])}>完成</Button>
          )}
        </View>
      ))}
      <View>你的ip: {data.data.origin}</View>
      <Icon type="iconicon_dianhua"></Icon>
    </View>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todo,
})

export default connect(mapStateToProps)(IndexPage)
