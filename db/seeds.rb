# List.create(title: 'sentimento',desc: 'Estou com muita fome')
# List.create(title: 'linguagem',desc: 'gosto muito de React')
# List.create(title: 'doce',desc: 'Pirulito do chaves')
List.delete_all
Todo.delete_all
@nums = [ 1,2,3,4,5]

10.times do
  @list = List.create(
    title: Faker::Color.color_name,
    desc: Faker::Hipster.sentence 
  )
  3.times do
    Todo.create(
      title: Faker::Food.ingredient,
      rating: @nums.sample ,
      price: 1.2,
      complete: Faker::Boolean.boolean,
      list_id: @list.id
    )
    
  end
end

#rails db:seed