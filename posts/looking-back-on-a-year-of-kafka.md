title: Looking Back On a Year of Learning Kafka 
date: '2024-01-29'
---

# Kafka Summit London 5k Fun Run 

I have sensory issues. I’ve never pursued a diagnosis, but I deal with these issues on a daily basis. My home resembles Gollum’s cave because overhead lighting gives me a headache. A long trip to the grocery store can leave me so overstimulated and overwhelmed that I need to go to bed at seven. If I don’t get medium-impact exercise for more than two days in a row, I develop tics. If you say my name while I’m in hyperfocus I won’t hear you.

It’s not all bad though. My sense of taste is sophisticated and it makes eating a good meal extra delightful. Nature walks are extra calming. I also get a pretty wild dopamine rush when I’m learning something new that I’m interested in. And in 2022, I started learning Kafka. 

Now, I’m pretty sure this sensory stuff affects the way I learn as well. My brain hooks into details first and won’t let go even if I try. When I was a kid, I never used a bookmark because I could just remember the page number I was on. My idea of heaven was sitting down with a glass of chocolate milk and reading the dictionary. Getting the big picture was more of a struggle. I had to write down the plot points of the books I was reading if I wanted to relate the overarching narrative to someone else later. 

What does this have to do with me learning Kafka today? Well, we all know Kafka is detailed and complex. In fact, I ran a text find command on the HTML in the docs recently and found that Kafka boasts more than 700 pieces of configuration! Wow! How delightful! And, at the same time, how intimidating. 

During my first year learning Kafka, I revelled in the complexity. I wrote client applications, ksqlDB commands, streams topologies. Whenever I learned something new I’d turn around and share it with an audience: consumer Group IDs, windowing, message compression. The blogs I wrote represent much of the knowledge I gained:

[Apache Kafka® Message Compression](https://www.confluent.io/blog/apache-kafka-message-compression/)

[What Is An Event in the Apache Kafka® Ecosystem?](https://www.confluent.io/blog/what-is-an-event-in-the-apache-kafka-ecosystem/)

[What Are Apache Kafka Consumer Group IDs?](https://www.confluent.io/blog/configuring-apache-kafka-consumer-group-ids/)

[Apache Kafka Beyond the Basics: Windowing](https://www.confluent.io/blog/windowing-in-kafka-streams/)

[Co-Partitioning with Apache Kafka](https://www.confluent.io/blog/co-partitioning-in-kafka-streams/)

[Dynamic vs. Static Consumer Membership in Apache Kafka](https://www.confluent.io/blog/dynamic-vs-static-kafka-consumer-rebalancing/)

[Unknown Magic Byte! How to Address Magic Byte Errors in Apache Kafka](https://www.confluent.io/blog/how-to-fix-unknown-magic-byte-errors-in-apache-kafka/)

[What Is an Apache Kafka Cluster? (And Why You Should Care)](https://www.confluent.io/blog/what-is-an-apache-kafka-cluster/)

[An Introduction to Apache Kafka Consumer Group Strategy](https://www.confluent.io/blog/kafka-consumer-group-partition-strategy/)





At the same time, I found that reasoning about Kafka, its general purpose and its place in its larger environment of data streaming technologies was difficult. Kafka in context kept slipping from my grasp. I knew people valued it enough to put up with the complexity, to put up with the intricate partition calculations and the interdependent configurations. But how to demonstrate Kafka’s power? If Kafka was a car, I knew how to replace air filters, check the tires, and do an oil change, but the skill of driving was escaping me. 

Then, I needed to take a break. I was having a baby. When you have a baby and you’re on parental leave, you’re not sleeping and you’re doing a lot of work, but you’re also sitting a lot. At first, I tried watching Netflix, but The Fall of the House of Usher was way too scary. So, I dove head-first into CSS and JavaScript animations. 

I had such a blast. I made [this guide to the LSP](https://what-is-the-lsp.netlify.app/), and this [introduction to spring physics in JS animation](https://spring-physics-in-animejs.netlify.app/). This foray into web development was also part of my break from learning Kafka. I didn’t think about it one bit as I delighted in CSS algorithms and Next.js routing.

After three months I felt ready to return to my role at Confluent. I was a little worried that such a long break would leave me feeling like I had to re-learn some things. But as my mind turned back to Kafka I found that the opposite was the case. Kafka, not just in detail but in the overview which had felt elusive before, was returning to me. A break from thinking about it was just what the doctor ordered. 

In fact, the day before I returned to work, an idea for a data streaming demonstration emerged: a 21st century stock ticker powered by Kafka. Feeding live stock data into Kafka, then sending it to Flink SQL for processing, and finally printing out that processed information via a receipt printer or Streamlit. I emailed the idea to my work address and I’ve begun working out the details since I’ve returned. 

As I reflect on all this, I wonder: should users have to know so many internal details to implement Kafka? After all, you shouldn’t have to sit down with a dictionary to learn a language – ideally, you can listen to people using the language and then start using it yourself. That’s how language teaching apps like DuoLingo work. 

But what would removing some of the complexity in Kafka look like? Ismael Juma addressed this in the keynote for Current 2023 (~minute 28). It could be dynamically merging and splitting partitions. It could come to be as key-based ordering in partitionless topics. 

Who knows what the future holds? But I’m buckled in for the ride. 
