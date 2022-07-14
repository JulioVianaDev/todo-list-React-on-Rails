# List.create(title: 'sentimento',desc: 'Estou com muita fome')
# List.create(title: 'linguagem',desc: 'gosto muito de React')
# List.create(title: 'doce',desc: 'Pirulito do chaves')
10.times do
  List.create(
    title: Faker::Hipster.word,
    desc: Faker::Hipster.sentence 
  )
end

#rails db:seed