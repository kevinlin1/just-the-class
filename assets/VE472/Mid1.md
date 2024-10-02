# VE472 Midterm Review 1

## Big data

1. **What is the major issue of computer when facing big data? CPU or Memory or Throughput?**

   Throughput (data transfer rate), Von Neumann bottleneck

   *Von Neumann bottleneck*: the limited throughput between the CPU and memory compared to the amount of memory

2. **Ways of increasing throughput:**

   -   Caching
   -   Branch prediction
   -   Parallel Read from multiple locations (RAID)


3. **How big is Big data? Or consider how large the data should be so that using Hadoop would be more efficient?**

   \>1 TB. Generally petabytes in size. Hadoop clusters usually holds TB to PB of data and can process petabytes of data within minutes.

4. **Are databases suitable for storing big data? Is HPC suitable for processing big data?**

   No. 

5. **Sequential vs. parallel algorithms?**

   - Sequential: RAM model
   - Parallel: PRAM model



# Hadoop


3. **History of Hadoop: when did it start? Which company developed Hadoop?**

   2002 as Apache Nutch. Apache Software Foundation.

4. **Goal of Hadoop:**

   Efficiently analyze massive amount of data

5. **Basic components of Hadoop:**

   -   common libraries
   -   HDFS
   -   MapReduce
   -   YARN

6. **Pros and Cons of HDFS?**

    - High throughput; Commodity hardware; large files
    - Large latency; metadata kept in namenode's memory; write always in append mode by a single writer.

7. **What is a container?**

    A container is an environment with restricted resources where application-specific processes are run

8. **What types of daemon does YARN provide?**

   Resource Manager and Node Manager

9. **What is YARN?**

   Resource manager/scheduler.

   -  Interacts with the filesystem
   -  Hides low level details from the user
   -  Offers an intermediate layer supporting many other distributed programming paradigms

10. **What is the goal of Mesos, Myriad, Spark and Drill?**

    -  Mesos: global scalable resource manager, not restricted to Hadoop
    -  Myriad: use Mesos to manage YARN resource requests
    -  Spark: Fully replace MapReduce; Support multi-pass applications;
            Write and read from the disk as little as possible; Take advantage of the memory
    -  Drill: Integrate into Hadoop as a MapReduce replacement; Be an interactive ad-hoc analysis system for read-only data;
            Be easily expandable using storage plugins; Enjoy data agility

11. **Difference between Drill and Spark?**

    Drill: SQL query engine for Big Data exploration.
    -  Drill allows fine grained security at the file level.
    -  SQL queries, searching -> use drill

    Spark: fast and general-purpose cluster computing system.
    -  Spark can also do SQL queries.
    -  Complex algorithms, ML & AI -> use spark.

12. **List some other tools introduced in Hadoop ecosystem?**

    -  Flink, Tez, Hbase, Hive, Spark SQL
    -  Serialization and storage components
    -  Management and monitoring (**Zookeeper**)
    -  Analytics helpers

13. **Three layers of Lambda Data Architecture:**

    -   Batch layer, storing data in batch
    -   Speed layer, analyze the data
    -   Serving layer, serve curated data

    data are provided to batch layer and speed layer simultaneously.

    Kappa Data Architecture: batch layer is removed.

14. **Difference between Batch processing and real-time processing?**

    In batch processing, data is processed in parts. The data is first stored, and then processed. (Apache Hadoop - MapReduce)
    In real-time processing, data is processed as soon as data is received, needs to be responsive and active. (Apache Storm, Apache Kafka, Redis)


​     

## Hadoop's Core Components

### HDFS

1.  **What is LVM?**

    Logical Volume Manager: manage disk partition

2.  **Default block size of HDFS**

    128MB

4.  **Pros and cons of having large/small blocks?**

    Large block: good when dealing with large data, have low latency; bad since it may waste memory
    Small block: save memory for smaller files, but wastes memory keeping track of free blocks, time-consuming when fetching data

5.  **Jobs of namenode and datanode:**

    namenode is read only, maintains metadata of data in datanode, stores info in namespace image and edit log to locate datanode
    datanode store only the data or certain blocks in cache, reports the stored blocks to namenode

6.  **What to do if the namenode fails?**

    Use backup namenode, via Network FileSystem(NFS) or `rsync`.

7.  **When I have 2 namenodes, is it good or bad to have each namenode store half of the data nodes?**

    Bad because if one namenode fail, half of the datanodes are lost

8.  **Having two namenodes in Active-Passive mode, when may race condition happen, how to avoid race conditions?**

    Active node goes down -> use passive node to write -> active node comes back -> have two active nodes writing -> race conditions.
    STONITH: shoot the other node in the head
    If one namenode become active, kill the other node

9.  **Default replication level of HDFS**:

    3 levels of replication

    -   First: same node as the client.
    -   Second: random, different rack from the first
    -   Third: same rack as the second but different node
    -   Others: random node in the cluster

10.  **Where should computation be done?**

     On rack holding second and third replication: data transfer on the same rack is fast.

11.  **How does Distributed filesystem contact NameNode?**

     Via RPC(Remote Procedure Call) Connection

12.  **How to handle failing in file write?**

     7 steps. Close pipeline. Add packets. Inform namenode. Remove faulty data node. Construct pipeline. Complete writing. Arrange replication.

### YARN

1.  **What is client node?**

    Client node is CPU (for calculation), in contrast data node is hard disk (for storage)

2.  **Jobs of resource manager and node manager in YARN.**

    RM: Manage the nodes, NM: Start container that runs applications

3.  **What is application master?**

    Application Master is a process that coordinates the execution of an application in the cluster. It is responsible for the execution of a single application. It asks for containers from the Resource Manager and executes specific programs (tasks) on the obtained containers. It is typically launched by Resource Manager and run in a container.

4.  **Why are node manager nodes connected through subthreads instead of connecting directly to resource manager node?**

    Minimize traffic, decrease bandwidth, make things faster

5.  **Preferred location of the containers?**

    We aim to minimize data transfer time

    Best: the same as the node where data is stored,
    ok: the computer on the same rack

6.  **Three ways YARN are used:**

    -   One application per user job
    -   One application per user session
    -   Long-running application shared among users

    No need to kill container for the last two case -> save time with previous data.

7.  **Three schedulers in YARN:**
    -   FIFO
    -   Capacity (DEFAULT scheduler, waste resources, containers not killed inside a queue)
    -   Fair (resource fairly shared, high latency due to allocation and deallocation of resources for different jobs)

8.  **How does YARN solve the problem that an application requesting a busy node?**

    + Each nodes send out heartbeat reporting the running containers and available resources. 
    + Capacity scheduler wait for some heartbeat before loosing the requirement. 
    + Fair scheduler wait for a predefined portion of nodes in the cluster to offer opportunities before loosening the requirement
