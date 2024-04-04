import os

path = os.getcwd()
pos = path.find('com')
package = path[pos:].replace('\\', '.')
# print(package)
# 获取表数据
tableName = input('Please input the name of the table you want to add:\n')
columnNumber = int(input('Please input the number of the columns:\n'))
print('Please input the name, variable type and  variable name of the column sequentially one by one:')
columns = []
for i in range(columnNumber):
    columns.append(input().split(' '))

# 生成pojo.entity
columnsCode = ''
for i in range(columnNumber):
    columnCode = f'''@Column(name = "{columns[i][0]}")
    private {columns[i][1]} {columns[i][2]};

    '''
    columnsCode += columnCode
pojoEntity = f'''package {package}.pojo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "{tableName}")
public class {tableName} {{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    {columnsCode}
}}'''


# 生成repository, service, serviceImpl, controller
repo = f'''package {package}.repository;

import {package}.pojo.entity.{tableName};
import org.springframework.data.jpa.repository.JpaRepository;

public interface {tableName}Repository extends JpaRepository<{tableName}, Long> {{
}}'''
service = f'''package {package}.service;

import {package}.pojo.entity.{tableName};
import java.util.List;
public interface {tableName}Service {{
    {tableName} insert{tableName}({tableName} {tableName.lower()});

    void delete{tableName}(Long id);

    {tableName} update{tableName}({tableName} {tableName.lower()});

    List <{tableName}> findAll{tableName}();

    {tableName} find{tableName}ById(Long id);
}}'''
serviceImpl = f'''package {package}.service;

import {package}.pojo.entity.{tableName};
import {package}.repository.{tableName}Repository;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import java.util.List;

@Service

public class {tableName}ServiceImpl implements {tableName}Service{{
    @Resource
    private {tableName}Repository {tableName.lower()}Repository;

    @Override
    public {tableName} insert{tableName}({tableName} {tableName.lower()}) {{
        return {tableName.lower()}Repository.save({tableName.lower()});
    }}

    @Override
    public void delete{tableName}(Long id) {{
        {tableName.lower()}Repository.deleteById(id);
    }}

    @Override
    public {tableName} update{tableName}({tableName} {tableName.lower()}) {{
        return {tableName.lower()}Repository.save({tableName.lower()});
    }}

    @Override
    public List<{tableName}> findAll{tableName}() {{
        return {tableName.lower()}Repository.findAll();
    }}

    @Override
    public {tableName} find{tableName}ById(Long id) {{
        return {tableName.lower()}Repository.findById(id).orElse(null);
    }}
}}'''
controller = f'''package {package}.controller;

import {package}.pojo.entity.{tableName};
import {package}.service.{tableName}Service;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/{tableName.lower()}")
public class {tableName}Controller {{
    @Resource
    {tableName}Service {tableName.lower()}Service;

    @GetMapping("")
    public List<{tableName}> findAll() {{
        return {tableName.lower()}Service.findAll{tableName}();
    }}

    @GetMapping("/{{id}}")
    public {tableName} findById(@PathVariable("id") Long id) {{
        return {tableName.lower()}Service.find{tableName}ById(id);
    }}

    @PostMapping("")
    public {tableName} add{tableName}(@RequestBody {tableName} {tableName}) {{
        return {tableName.lower()}Service.insert{tableName}({tableName});
    }}

    @DeleteMapping("/{{id}}")
    public void delete{tableName}(@PathVariable("id") Long id) {{
        {tableName.lower()}Service.delete{tableName}(id);
    }}

    @PutMapping("")
    public {tableName} update{tableName}(@RequestBody {tableName} {tableName}) {{
        return {tableName.lower()}Service.update{tableName}({tableName});
    }}

}}'''

# 写入文件
with open(f'pojo/entity/{tableName}.java', 'w') as f:
    f.write(pojoEntity)
with open(f'repository/{tableName}Repository.java', 'w') as f:
    f.write(repo)
with open(f'service/{tableName}Service.java', 'w') as f:
    f.write(service)
with open(f'service/{tableName}ServiceImpl.java', 'w') as f:
    f.write(serviceImpl)
with open(f'controller/{tableName}Controller.java', 'w') as f:
    f.write(controller)

'''
Fav
2
user_id Long userId
university_id Long universityId
'''
