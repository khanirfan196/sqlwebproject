---
layout: ../../layouts/SqlPagesLayout.astro
title: SQL Home Page
description: This is a blog page
keywords: sql blog, tsql, keyword
---

<CommonHeaderComp />
<Layout>

# hello

## heading 2

hello this is paragraph

<div class="codeBlock">
    <code>
      <span class="codeComments">
    // Basic select statement to retrieve data from all columns.
      </span>
      <br>
      <br>
      <span class="codeQuery">
        <pre>
select * from table_name;
-- insert values
INSERT INTO call_outcome (outcome_text) VALUES ('call started');
INSERT INTO call_outcome (outcome_text) VALUES ('finished - successfully');
INSERT INTO call_outcome (outcome_text) VALUES ('finished - unsuccessfully');

INSERT INTO employee (first_name, last_name) VALUES ('Thomas (Neo)', 'Anderson');
INSERT INTO employee (first_name, last_name) VALUES ('Agent', 'Smith');

INSERT INTO customer (customer_name, city_id, customer_address, next_call_date, ts_inserted)
VALUES ('Jewelry Store', 4, 'Long Street 120', '2020/1/21', '2020/1/9 14:1:20');
INSERT INTO customer (customer_name, city_id, customer_address, next_call_date, ts_inserted)
VALUES ('Bakery', 1, 'Kurfürstendamm 25', '2020/2/21', '2020/1/9 17:52:15');
INSERT INTO customer (customer_name, city_id, customer_address, next_call_date, ts_inserted)
VALUES ('Café', 1, 'Tauentzienstraße 44', '2020/1/21', '2020/1/10 8:2:49');
INSERT INTO customer (customer_name, city_id, customer_address, next_call_date, ts_inserted)
VALUES ('Restaurant', 3, 'Ulica lipa 15', '2020/1/21', '2020/1/10 9:20:21');

</pre>
</span>
<br>
<br>

<span class="warningText">
// Warning Text
</span>
</code>

  </div>
</Layout>
<RightMenuComp />
