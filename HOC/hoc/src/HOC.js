import React from 'react'

const HOC = (WrappendComponent , entity) => {
  return class extends React.Component {

    state = {
        data : [],
        term : "",
    }

    componentDidMount() {
        const fetchUser = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`)

            const data = await res.json()
            this.setState({...this.state, data : data})
            // console.log(data);
        }

        fetchUser();
    }

    render () {

        let {term , data} = this.state

        const filterData = data.slice(0,10).filter(d => {

            if(entity === 'users'){
                const {name} = d
                return name.indexOf(term) >= 0
            }

            if(entity === 'todos') {
                const {title} = d
                return title.indexOf(term) >= 0
            }
        })

        return (
                 <div>
                    <h2>{entity}</h2>
                    <input type = "text" value =  {term}  onChange={(e) => this.setState({...this.state , term :e.target.value})} />

                    <WrappendComponent data = {filterData} >  </WrappendComponent>
                 </div>
        )
    }
  }
}

export default HOC