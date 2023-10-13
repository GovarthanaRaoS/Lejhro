import React from 'react'

const Blogs = () => {
  return (
    <div className='blogs-container'>
        <h1>Blogs</h1>
        <h3>Data Analysis: Everything You Need to Know</h3>
        <div className="quotation-container">
          <blockquote className='quote'>Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway.</blockquote>
          <p className='author'>~ Geoffrey Moore</p>
        </div>
        <p className="description">Companies today need every edge and advantage they can get. Thanks to obstacles like rapidly changing markets, economic uncertainty, finicky consumer attitudes, and even global pandemics, businesses today are working with slimmer margins for error.

        Companies that want to thrive in these competitive markets can improve their odds of success with the help of data analysis.

        This strategy is common sense, and it applies to personal life as well as business. No one makes important decisions without first finding out what’s at stake, the pros and cons, and the possible outcomes. Similarly, no company that wants to succeed should make decisions based on bad data. Organisations need information; they need data. This is where data analysis enters the picture.</p>
        <p className='question'>What is data analysis?</p>
        <p className='description'>
        Data analysis is defined as a process of cleaning, transforming, and modelling data to discover useful information for business decision-making. The purpose of Data Analysis is to extract useful information from data and take the decision based upon the data analysis.

The information gathered from the data are then presented visually in the form of charts, graphs, or dashboards.

The information discovered can help aid the company’s or organisation’s growth. Decision-makers will be able to come to an actionable conclusion and make the right business decisions.
        </p>
        <h4>Types of Data Analysis:</h4>
        <p className='question'>Text Analysis</p>
        <p className='description'>
        Text Analysis is also referred to as Data Mining. It is one of the methods of data analysis to discover a pattern in large data sets using databases or data mining tools. It used to transform raw data into business information.
        </p>
        <p className='question'>Exploratory Analysis</p>
        <p className='description'>
        As its name suggests, the main aim of the exploratory analysis is to explore. Prior to it, there was still no notion of the relationship between the data and the variables. Once the data is investigated, the exploratory analysis enables you to find connections and generate hypotheses and solutions for specific problems.
        </p>
    </div>
  )
}

export default Blogs