# VE472 Midterm Review 2

## Hadoop's Core Components


### MapReduce

1. **Three steps of MapReduce:**

   -   Map
   -   Shuffle
   -   Reduce

2. **Process of MapReduce job initialization and startup?**

   5 steps. Request ID to RM. Check parameters. Split into tasks. Copy splits onto FS. Submit job on RM.

   7 steps. YARN allocates container. RM launch app master. Setup task. Retrieve splits from FS. Create Map tasks. Allocate resources. Locate data on FS.

3. **Pros and Cons of MapReduce reading from/writing to disk?**

   Safe but slow. In contrast Spark and Drill will minimize disk usage.

4. **What to do when task fails, JVM crashes, or task hangs.** （Job failure handle)

   -   *task fails*: When receiving a failure notice the application master marks the task as failed. The container is freed and resources released
   -   *JVM crashes*: the node manager notices the application manager of the failure
   -   *task hangs*: Tasks marked as failed if no report is received. The JVM is killed by the application master.
   -   node manager fails:  reschedule to a different node manager. If certain node manager frequently fails, application master will send this node manager to blacklist

5. **Why are data compressed before sending to other reducers?**

   To reduce traffic. For the similar reason, only smaller part of data are sent to other reducers.

6. **What is the main bottleneck of MapReduce?**

   We need write and read on disk which is very slow.

7. Question to test your understanding

   * Why we need shuffle in MapReduce? What will happen if we don't have a shuffle stage?
   * Some mapred code example https://www.dcs.bbk.ac.uk/~dell/teaching/cc/book/ditp/ditp_ch3.pdf

## Drill, Spark and more

### Drill

1. **Functions of Zookeeper:**

   Dependent of Drill. No large data-store, allow different nodes in cluster to communicate; let various applications of hadoop to work together.

2. **What is a drillbit?**

   A drill process created when running Drill on YARN. Each query given to drill is split into fragments and they are run on different drillbits.

3. **What is a foreman drillbit?**

   A drillbit that receives the query and drives the entire query. Every drillbit can be foreman drillbit.

4. **Characteristics of Drill:**

   -   Each drillbit contains all services and capabilities of Drill
   -   Columnar execution
   -   Optimistic query execution
   -   Vectorization
   -   Runtime Compilation

5. **Why csv file is not frequently used in big data compared with serialized data?**

   CSV is good for testing but the transformation of ascii code is time-consuming.

6. **Fragments are the result of which stage?**

   fragments are the results of physical plan.

7. **Why we have Intermediate MinorFragment when returning results?**

   to avoid foreman to be super busy

### Spark

1. **Two modes of spark:**

   -   Client mode (Interaction with user)
   -   Cluster mode (Runs on cluster, fully utilize hadoop)

2. **What is an RDD?**

   Resilient Distributed Dataset, a fundamental data structure of spark. It is a *read-only*, *partitioned* collection of records.

3. **What does `resilient` mean in RDD?**

   It is able to be reconstructed in case of partition loss, since it is storing how it was derived from other datasets.

4. **What does `distributed` mean in RDD?**

   RDD's elements can be partitioned across machines based on a key in each record..

5. **What make RDDs fast?**

   -   Distributed collections of objects that can be *cached in memory* (drop using LRU) across cluster nodes
   -   Manipulated through various parallel operations
   -   Automatically rebuilt on failure.

6. **Two types of operations on an RDD:**

   -   *Transformation*: creating new dataset, lazy evaluation (not executed until it sees an action, reorganize and optimize the process), avoid returning large datasets
   -   *Action*: Compute on a dataset

7. **Caching levels of RDDs:**

   -   Memory only
   -   Memory and disk (RDD too long to reconstruct)
   -   Memory only serialized (use Snappy to compress)
   -   Replication (for security)

8. **Difference between Spark and MapReduce?**

   Data storage: MapReduce use disk and play safe while Spark minimize disk usage, use memory as much as possible.

   Upon failure: MapReduce use replication data; Spark simply reconstruct RDD

   Speed: Spark is much faster

9. **Why lambda is widely used in Spark?**

   easier to serialize due to compact property

10. **How variables can be shared in Spark?**

    With Broadcast variables

11. **What is accumulators used for?**

    To avoid overhead & race condition.

12. Some more questions

    * Why we want DAG in Spark?

### More tools

1.  **What is Kubernetes?**

    A container orchestration tool, usually handles clusters that runs dockers



### How to design which tool to use when dealing with data of different size

<100GB drill & Spark alone

100GB-10TB K8S

\>10TB HADOOP