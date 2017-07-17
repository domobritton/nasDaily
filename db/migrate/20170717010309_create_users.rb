class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.boolean :early_interest_in_app, default: false
      t.boolean :early_interest_in_tshirt, default: false

      t.timestamps
    end

    add_index :users, [:email], :unique => true
  end
end
