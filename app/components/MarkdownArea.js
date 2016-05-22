import React from 'react'
import AceEditor from 'react-ace'
import {EDITOR_INITIAL_VALUE} from '../helpers/const'
import 'brace'
import 'brace/mode/markdown'
import 'brace/theme/github'
import styles from './MarkdownArea.css'
import globalStyles from '../css/global.css'
import variables from '../css/var.css'

export default React.createClass({
  getInitialState() {
    return {
      width: null,
      height: null,
      value: EDITOR_INITIAL_VALUE
    }
  },

  resizeEditorWH() {
    let el = this.refs.container
    this.setState({
      width: `${el.offsetWidth - parseInt(variables.paddingHoriz, 10) * 2}px`,
      height: `${el.offsetHeight - parseInt(variables.paddingVertical, 10) * 2}px`
    })
  },

  componentDidMount() {
    this.resizeEditorWH()
  },

  syncPost() {
    // TODO 同步内容到各大平台
    let content = this.refs.aceEditor.editor.getValue()
    console.log('syncing post ...')
    console.log(content)
  },

  render() {
    let el = this.state.width ? (
      <AceEditor
        ref="aceEditor"
        className={styles.aceEditor}
        width={this.state.width}
        height={this.state.height}
        mode="markdown"
        theme="github"
        value={EDITOR_INITIAL_VALUE}
        name="editor"
        showGutter={false}
        setOptions={{fontSize: 16, wrap: true}}
      />
    ) : null

    return (
      <div ref="container" className={styles.markdownContainer}>
        <div className={styles.container}>
          <a href="javascript:;" title="开始同步文章" onClick={this.syncPost}>
            <i className={globalStyles.iconfont}>&#xe6a2;</i>
          </a>
        </div>

        {el}
      </div>
    )
  }
})