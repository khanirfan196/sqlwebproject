---
layout: ../../layouts/SqlPagesLayout.astro
title: SQL Home Page
description: This is a blog page
keywords: sql blog, tsql, keyword
---

<Layout>

# MS SQL Server Installation and Model Database Setup

To learn SQL, we need a Relational Database Software System and a sample/model Database so that we can run queries. Please follow the <a href="#" class="contentLinks">Installation</a> steps for MS SQL Server and then run the <a href="" class="contentLinks">scripts</a> for sample database creation. 
<div>
<button class="copyBtn" onclick="copyCode()">Copy Code</button>
</div>
<div class="codeBlock">
<pre>
<code class="language-sql" id="codeText">
-- Basic select statement to retrieve data from all columns.    
select * from table_name;
-- insert values
INSERT INTO call_outcome (outcome_text) VALUES ('call started');
INSERT INTO call_outcome (outcome_text) VALUES ('finished - successfully');
INSERT INTO call_outcome (outcome_text) VALUES ('finished - unsuccessfully');

INSERT INTO employee (first_name, last_name) VALUES ('Thomas (Neo)', 'Anderson');
INSERT INTO employee (first_name, last_name) VALUES ('Agent', 'Smith');

INSERT INTO customer (customer_name, city_id, customer_address, next_call_date, ts_inserted) VALUES ('Jewelry Store', 4, 'Long Street 120', '2020/1/21', '2020/1/9 14:1:20');
INSERT INTO customer (customer_name, city_id, customer_address, next_call_date, ts_inserted) 
VALUES ('Bakery', 1, 'Kurfürstendamm 25', '2020/2/21', '2020/1/9 17:52:15');
INSERT INTO customer (customer_name, city_id, customer_address, next_call_date, ts_inserted) 
VALUES ('Café', 1, 'Tauentzienstraße 44', '2020/1/21', '2020/1/10 8:2:49');
INSERT INTO customer (customer_name, city_id, customer_address, next_call_date, ts_inserted)
VALUES ('Restaurant', 3, 'Ulica lipa 15', '2020/1/21', '2020/1/10 9:20:21');
</code>
</pre>
</div>
</Layout>
<RightMenuComp />
