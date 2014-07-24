select c."text",count(*) as num_project, sum(b1.$C{Q4_1}) as "Y2014",sum(b2.$C{Q4_1}) as "Y2015",sum(b3.$C{Q4_1}) as "Y2016" from $B{B01} as b
  left join registration.choice as c on c.id = b.$C{Q3_17}
  left join $B{B01} as b1 on b1.id = b.id and b1.$C{Q3_18} = 2014
  left join $B{B01} as b2 on b2.id = b.id and b2.$C{Q3_18} = 2015
  left join $B{B01} as b3 on b3.id = b.id and b3.$C{Q3_18} = 2016
WHERE b.district_id in (20,34,55,73,74,104,120,137,356,182,197,211,228,255,274,291,315,337,341,357,355)
GROUP BY c."text"